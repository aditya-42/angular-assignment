import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', title:'Home Page', component: HomeComponent },
    { path: 'products', title:'Products', component: ProductsComponent },
  ];