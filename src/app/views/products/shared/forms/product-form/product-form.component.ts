import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Product from '../../../product.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
    
    @Input() model: Product = new Product();
    @Input() type: string;
    @Output() handleSubmit: EventEmitter<Product> = new EventEmitter<Product>();
    buttonTitle: string = "";

    constructor(private location: Location){}

    ngOnInit(){
        this.buttonTitle = this.type === 'edit' ? 'Actualizar' : 'Crear';
        if(this.type === 'edit'){
           
        }
    }

    onCancel(){
        this.location.back();
    }

    onSubmit(form){
        const  {valid, value} = form;
        if(valid){
            //const model = Object.assign({}, this.model, value);
            this.handleSubmit.emit(value);
        }
        console.log(form)
        //this.handleSubmit.emit();//this.type === 'edit' ? 'Actualizar' : 'Crear'
    }

    onBack(){
        //this.router.navigate(['/products']);
    }

}
