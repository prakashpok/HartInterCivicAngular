import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {shoppingList} from '../models/shopping.model'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl = 'https://localhost:7257/api/TimerList/get.json'

  constructor(private http: HttpClient) { }

  // get shopping list
  getShoppingList(): Observable<shoppingList[]>{
    return this.http.get<shoppingList[]>(this.baseUrl);
  }
      
}
