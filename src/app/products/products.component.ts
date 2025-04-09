import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

type products = {
  title:string
}

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:products[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.products = data;
        this.loading = false;  
      },
      (err) => {
        this.error = 'Failed to fetch products. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    );
  }
 
}
