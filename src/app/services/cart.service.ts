import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addToCartBSubject$: BehaviorSubject<any>;
  private cartItems: Array<Object> = [];
  constructor() {
    this.addToCartBSubject$ = new BehaviorSubject<any>(this.cartItems);
   }

   getCartProducts(): Observable<any> {
      return this.addToCartBSubject$.asObservable();
   }

   addToCart(item:Object) {
    this.cartItems.push(item);
    this.addToCartBSubject$.next(this.cartItems);
   }

   removeFromCart(item: Object) {
    this.cartItems = this.cartItems.filter(product => product['id'] !== item['id']);  
    this.addToCartBSubject$.next(this.cartItems);
   }
}
