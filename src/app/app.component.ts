import { Component } from '@angular/core';
import { CartService } from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  totalItrmInCart: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.getCartProducts().subscribe(p => {
      this.totalItrmInCart = p.length;
    });
  }


}
