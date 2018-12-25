import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list-category/products-list-category';
import { ProductListItemsComponent } from './products-list-category/product-list-items/product-list-items.component';
import { SingleProductComponent } from './products-list-category/single-product/single-product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
 
    CommonModule,
    ProductsRoutingModule
   
  ],

  declarations: [
    ProductsComponent,
    ProductsListComponent,
    SingleProductComponent,
    ProductListItemsComponent,
  ]
})
export class ProductsModule { }
