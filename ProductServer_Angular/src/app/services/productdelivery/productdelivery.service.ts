import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdeliveryService {

  constructor(private http:HttpClient) { }

  addDelivery(data:any){
    return this.http.post('http://localhost:8083/productdelivery',data);
  }

  updateDelivery(data:any){
    return this.http.post('http://localhost:8083/productdelivery/update',data);
  }
  getDelivery(){
    return this.http.get('http://localhost:8083/productdelivery');
  }

  getDeliveryByPincode(data:any){
    return this.http.get('http://localhost:8083/productdelivery/'+data)
  }
  
  deleteDelivery(data:any){
    return this.http.delete('http://localhost:8083/productdelivery/'+data);
  }
}
