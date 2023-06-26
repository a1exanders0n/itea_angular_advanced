import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class OnlineStoreService {
  constructor(private readonly _http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
