import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {

  createSubs: Subscription;
  
  constructor(
    private productsService: ProductsService,
    private router:Router
  ) { }
  
  ngOnInit() {
  }

  onSubmit(product: Product){
    this.createSubs = this.productsService.createProduct(product)
    .subscribe((product: Product) =>{
      this.router.navigate(['/products']);
      console.log('Producto creado >', product);
    });
  }

  ngOnDestroy() {
    if(this.createSubs)
      this.createSubs.unsubscribe();
  }

}
