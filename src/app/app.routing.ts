import { Route } from '@angular/router';
import { ListProductComponent } from './views/products/list-product/list-product.component';
import { CreateProductComponent } from './views/products/create-product/create-product.component';
import { EditProductComponent } from './views/products/edit-product/edit-product.component';
import { Z_FULL_FLUSH } from 'zlib';

export const routes: Route[] = [
    {
        path: 'products',
        component: ListProductComponent
    },
    {
        path: 'products/create',
        component: CreateProductComponent
    },
    {
        path: 'products/:id',
        component: EditProductComponent
    },
    {
       path: '',
       redirectTo: 'products',
        pathMatch: 'full'
    }
];