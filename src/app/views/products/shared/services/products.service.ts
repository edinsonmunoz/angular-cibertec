import { Injectable } from '@angular/core';

import { products } from '../../../../mocks/product';
import Product from '../../product.model';

//Servicio
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Environment


@Injectable()
export class ProductsService {

    //products: Product[] = products;
    private api: string = environment.api;//'http://localhost:3000'
    private endpoint:string = 'products';

    constructor(
        private http: HttpClient
    ){}

    getProducts(){
        const URL: string= `${this.api}/${this.endpoint}/`;
        return this.http.get(URL);
        //return this.products;
    }

    getProduct(id: number){
        const URL: string= `${this.api}/${this.endpoint}/${id}/`;
        return this.http.get(URL);
        //const prod = this.products.filter(prod => prod.id === id);
        //return prod[0];
    }

    removeProduct(id: number){
        const URL: string= `${this.api}/${this.endpoint}/${id}/`;
        return this.http.delete(URL);
       // this.products = this.products.filter(prod => prod.id!=id);
       // return this.products;
    }

    createProduct(product: Product){
        const URL: string= `${this.api}/${this.endpoint}/`;
        return this.http.post(URL, product, {
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

    updateProduct(product: Product){
        const URL: string= `${this.api}/${this.endpoint}/${product.id}/`;
        return this.http.put(URL, product, {
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

}