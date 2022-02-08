import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl= 'http://localhost:8080/products?size=100'; //spring booot rest api url
  constructor(private httpClient : HttpClient) { } //inject httpClient


  //use to map JSON data from spring data
  //REST to Product array
  getProductList(): Observable<Product[]>{


    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response =>response._embedded.products)
    );
  }
}
interface GetResponse{
  _embedded:{
    products: Product[];
  }
}
