import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  list: Array<Object> = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.list.push({"id": 1, "name": "Jeans","price": '1000'})
    this.list.push({"id": 2, "name": "Laptop","price": '99000'})
    this.list.push({"id": 3, "name": "Shirt","price": '500'})
    this.list.push({"id": 4, "name": "Shoe","price": '300'})
    this.list.push({"id": 5, "name": "iPhone","price": '19000'})
    this.list.push({"id": 6, "name": "Book","price": '50'})
    this.list.push({"id": 7, "name": "Bat","price": '400'})
  }
  addToCart(item:Object) {
    this.cartService.addToCart(item);
  }
}
