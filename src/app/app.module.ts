import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Agregando routing
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/common/nav/nav.component';
import { FooterComponent } from './components/common/footer/footer.component';

// Agregando modulo
import { ProductsModule } from './views/products/products.module';

import {routes} from './app.routing';

 @NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule, // Agregando modulo
    RouterModule.forRoot(routes) //Agregar por routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  title = "appAngular Laboratorio"  //cambiando titulo
}