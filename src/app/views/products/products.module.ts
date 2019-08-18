import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Importando para que funcione direccionamiento
import {RouterModule} from '@angular/router';

import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directive/hover.directive';
//import { SortPipe } from './shared/pipes/sort.pipe';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsService } from './shared/services/products.service';
import { ProductFormComponent } from './shared/forms/product-form/product-form.component';

@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,//directiva de hover
    ShortTextPipe,//directiva de ordenamiento
    CreateProductComponent,
    EditProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule, //importando para que funcione direccionamiento
    FormsModule
  ],
  exports: [
    ListProductComponent
  ],
  providers:[
    //SortPipe,
    ProductsService //Pipeline para ordenar
  ]
})
export class ProductsModule { }
