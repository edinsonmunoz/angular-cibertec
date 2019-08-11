import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy{

  product: Product;
  updateSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService : ProductsService) { }

  ngOnInit() {
      const {id} = this.route.snapshot.params;
      this.productService.getProduct(+id).subscribe((product : Product) => {
      this.product = product; 
      console.log(this.product);
      });
      //console.log('fuera', this.product);
      /*const {id} = this.route.snapshot.params;
      this.product = this.productService.getProduct(+id);
      console.log('Console id: ', this.product);*/
  }

  onSubmit(parametro){
    this.productService.updateProduct({id: 105, name: 'Kenichi 2'})
    .subscribe((product: Product) =>{
      this.router.navigate(['/products']);
    });
    console.log('Kenichiiiiii');
  }

  ngOnDestroy() {
    this.updateSubs.unsubscribe();
  }

}
