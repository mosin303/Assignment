import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urls= 'http://localhost:3000/product';
  url='https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get(this.url);
  }
}
