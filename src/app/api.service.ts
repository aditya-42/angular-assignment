import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://fakestoreapi.com";

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    const url = `${this.baseUrl}/products`;
    return this.http.get(url).pipe(
      map(response => response),  
      catchError(error => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }
}
