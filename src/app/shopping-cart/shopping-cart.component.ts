import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {
  items : Array<Object> = [];
  constructor(private cartService: CartService) {
    this.cartService.getCartProducts().subscribe(p => {
      this.items = p;
    })
   }

  ngOnInit() {
  }

  removeFromCart(item) {
    this.cartService.removeFromCart(item);
  }
}
