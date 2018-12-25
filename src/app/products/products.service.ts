import { Injectable, OnInit } from '@angular/core';
import { CategoryModel } from '../shared/category.model';
import { Subject } from 'rxjs';
import { ShopCartService } from '../shop-cart/shop-cart-service';
import { DataStorageServiceService } from '../shared/data-storage-service.service';
import { ProductModal } from '../admin/products/products.component';
import { ProductModel } from '../shared/product.model';

@Injectable()
export class ProductsService {
  cateogoryChange = new Subject<CategoryModel[]>();

  private categoryModule: CategoryModel[] = [];

  constructor(private shopService: ShopCartService, private dataStorageServiceServiceta: DataStorageServiceService) {

    //this.getCategoryFromServer();
  }

  /**lose napisano */
  getCategoryFromServer(): Promise<CategoryModel[]> {
    return new Promise((resolve, reject) => {
      this.dataStorageServiceServiceta.getCategory().subscribe(
        (category: CategoryModel[]) => {
          this.categoryModule = category;
          this.cateogoryChange.next(this.categoryModule.slice());
          resolve(this.categoryModule.slice());
        },
        (error) => reject(error)
      );
    });
  }

  getCategory() {
    return this.categoryModule.slice();
  }

  getItemsProduct(index: number, ) {

    return this.categoryModule[index].products[index];
  }

  getProduct(indexProduct: number, indexCategory: string) {
    for (let i = 0; i < this.categoryModule.length; i++) {
      if (this.categoryModule[i].name == indexCategory) {
        return this.categoryModule[i].products[indexProduct]
      }
    }


  }


  getListOfProduct(index: string) {
    console.log(this.categoryModule + 'sss milos')

    for (let i = 0; this.categoryModule.length; i++) {
      if (this.categoryModule[i].name == index) {
        return this.categoryModule[i].products
      }
    }
  }

  getAllProduct() {
    let categorys: ProductModel[] = [];
    for (let i = 0; i < this.categoryModule.length; i++) {
      for (let j = 0; j < this.categoryModule[i].products.length; j++) {
        categorys.push(this.categoryModule[i].products[j])
      }
    }
    return categorys;
  }


}
