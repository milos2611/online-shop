import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { ProductModel } from 'src/app/shared/models/product.model';
import { Subscription, Observable } from 'rxjs';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { ProductsService } from '../products.service';
import { ShopCartService } from 'src/app/shop-cart/shop-cart-service';
import { DataStorageServiceService } from 'src/app/shared/services/data-storage-service.service';


@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.css']
})
export class ProductListItemsComponent implements OnInit, OnDestroy {
  categoryName: string;
  productList: string;
  subscription: Subscription;
  hero$: Observable<ProductModel>;
  categoryModule: CategoryModel[];
  singleProducts: ProductModel[];



  constructor(private productsService: ProductsService, private route: ActivatedRoute,
    private router: Router, private shop: ShopCartService, private dataStorageServiceServiceta: DataStorageServiceService) { }


  ngOnInit() {
    this.productsService.getCategoryFromServer().then((cat: CategoryModel[]) => {
      this.getProductList();
    }).catch((reason: any) => {
      // error handling here
    });
  }

  getProductList() {




    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {

          this.categoryName = params['category'];
          this.productList = params['productsList'];
          if (this.categoryName != null) {
            this.singleProducts = this.productsService.getListOfProduct(this.categoryName);
          }
          else {
            this.singleProducts = this.productsService.getAllProduct();
          }

        })


    /* 
       this.singleProducts = this.route.paramMap.pipe(
         switchMap((params: ParamMap) =>
           this.productsService.getListOfProduct(params.get('id')))
       );
   
       /*this.singleProductsthis.route.paramMap.pipe(
         switchMap(params => {
           // (+) before `params.get()` turns the string into a number
           this.categoryName  = params.get('category');
           return this.productsService.getListOfProduct(this.categoryName);
         })
       );*/

  }


  addToShoppingList(index: number) {
    this.shop.setProductCart(this.singleProducts[index]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


