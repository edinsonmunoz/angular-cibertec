import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importando para que funcione direccionamiento
import {RouterModule} from '@angular/router';

import { ListProductComponent } from './list-product/list-product.component';
import {HoverDirective} from './shared/directive/hover.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShortTextPipe,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule //importando para que funcione direccionamiento
  ],
  exports: [
    ListProductComponent
  ],
  providers:[
    SortPipe
  ]
})
export class ProductsModule { }
