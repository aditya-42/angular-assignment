import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

type products = {
  title:string
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:products[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Fetch users when the component initializes
    this.apiService.getProducts().subscribe(
      (data) => {
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
