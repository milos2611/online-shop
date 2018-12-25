import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopCartService } from './shop-cart-service';
import { ProductModel } from '../shared/product.model';
import { Subscription } from 'rxjs';
import { DataStorageServiceService } from '../shared/data-storage-service.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  productCarts: ProductModel[];
  subscription: Subscription;
  priceForAllProducts = 0;


  constructor(private shopCartService: ShopCartService) { }

  ngOnInit() {
   

    this.subscription = this.shopCartService.shopCartChanged.subscribe(
      (products: ProductModel[]) => {
        this.productCarts = products;
      }
    )
    this.productCarts = this.shopCartService.getProduct();
    this.priceForAllProducts = this.calculationPrice();


  }

  calculationPrice() {
    let priceForAllProducts = 0;
    for (let i = 0; i < this.productCarts.length; i++) {
      for (let j = 0; j < this.productCarts[i].numberOfProduct; j++) {
        priceForAllProducts += this.productCarts[i].price;
      }
    }
    return priceForAllProducts;
  }




  deleteFromCart(index: number) {
    this.shopCartService.deleteProduct(index);


  }

  setPrice(numberOfPoruct: number, index: number) {
    this.productCarts[index].numberOfProduct = numberOfPoruct;
    this.priceForAllProducts = this.calculationPrice();
  }


}

