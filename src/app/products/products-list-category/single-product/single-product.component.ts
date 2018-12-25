import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/shared/category.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from 'src/app/shared/product.model';
import { ShopCartService } from 'src/app/shop-cart/shop-cart-service';
import { ProductsService } from '../../products.service';
import { DataStorageServiceService } from 'src/app/shared/data-storage-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  singleProducts = <ProductModel>{};
  id: number;
  category: string;




  constructor(private productsService: ProductsService, private route: ActivatedRoute,
    private router: Router, private db: DataStorageServiceService, private shop: ShopCartService) {
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.category = params['category'];
          this.id = +params['id'];
          this.singleProducts = this.productsService.getProduct(this.id, this.category);
        })
  }

  addToShoppingList() {

    this.shop.setProductCart(this.singleProducts);

  }
}
