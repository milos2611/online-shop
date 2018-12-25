import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductListItemsComponent } from "./products-list-category/product-list-items/product-list-items.component";
import { SingleProductComponent } from "./products-list-category/single-product/single-product.component";

const productsRoutes: Routes = [
    {
        path: '', component: ProductsComponent, children: [
            { path: '', component: ProductListItemsComponent },
            { path: ':category', component: ProductListItemsComponent },
            { path: ':category/:id', component: SingleProductComponent }


        ]
    },

]
@NgModule({
    imports: [
        RouterModule.forChild(productsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {

}