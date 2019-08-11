import { Component, OnInit, OnDestroy } from '@angular/core';
import Product from '../product.model';
import {SortPipe} from '../shared/pipes/sort.pipe';
import { ProductsService } from '../shared/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, OnDestroy{

  //allProducts: Array<Product> = [
  allProducts: Product[];
  updateSubs: Subscription;

  // Por Constructor pasa el sortPipe
  constructor(
    private sortPipe: SortPipe,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    //this.allProducts = this.productsService.getProducts();
    this.productsService.getProducts().subscribe((products : Product[]) => {
      this.allProducts = products; 
    });
  }

  onSort(value: string){
    this.sortPipe.transform(
      this.allProducts,
      value
    );
  }

  onRemove(id: number){
    this.productsService.removeProduct(id).subscribe((response) =>{
      this.allProducts = this.allProducts.filter(prod => prod.id!=id);
    });
    /*this.sortPipe;
    this.allProducts = this.allProducts.filter(prod => prod.id!=id);*/
  }

  ngOnDestroy() {
    this.updateSubs.unsubscribe();
  }

}
