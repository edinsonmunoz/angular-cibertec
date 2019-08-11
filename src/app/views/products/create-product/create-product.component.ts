import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {

  constructor(private productsService: ProductsService) { }
  updateSubs: Subscription;

  ngOnInit() {
  }

  onSubmit(parametro){
    this.productsService.createProduct({name: 'test 1'})
    .subscribe((product: Product) =>{
      console.log('Producto creado >', product);
    });
    console.log('Kenichiiiiii');
  }

  ngOnDestroy() {
    this.updateSubs.unsubscribe();
  }

}
