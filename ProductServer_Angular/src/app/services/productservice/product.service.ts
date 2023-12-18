import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:any)
  {
    return this.http.post('http://localhost:8083/product',data);
  }

  updateProduct(data:any){
    return this.http.post('http://localhost:8083/product/update',data);
  }

  getProduct()
  {
    return this.http.get('http://localhost:8083/product');
  }

  deleteProduct(productCode:any){
    return this.http.delete('http://localhost:8083/product/'+productCode);
  }

  findProduct(data:any)
  {
    return this.http.post('http://localhost:8083/product/search',data);
  }

  getProductById(data:any){
    return this.http.get('http://localhost:8083/product/'+data);
  }
}
