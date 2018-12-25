
import { Injectable } from '@angular/core';
import { ProductModel } from '../shared/product.model';
import { Subject } from 'rxjs';
import { DataStorageServiceService } from '../shared/data-storage-service.service';

@Injectable()
export class ShopCartService {
    startedEditing = new Subject<number>();
    shopCartChanged = new Subject<ProductModel[]>();

    constructor(private db: DataStorageServiceService) {

    }
    private productCart: ProductModel[] = []



    getProduct() {
        return this.productCart.slice()
    }

    deleteProduct(index: number) {
        this.productCart.splice(index, 1)
        this.shopCartChanged.next(this.productCart.slice())
    }

    setProductCart(product: ProductModel) {
        for (let i = 0; i < this.productCart.length; i++) {
            if (product.id == this.productCart[i].id && product.numberOfProduct >= 1) {
                
                  this.productCart[i].numberOfProduct = product.numberOfProduct + this.productCart[i].numberOfProduct;
                  return;
                

            }
        }
       /** Problem je samo sto sa servera stize bez  numberOfProduct*/
        this.productCart.push(product);
        this.shopCartChanged.next(this.productCart);


    }


    /**Dodaj  obsrvebols preplati se u komponentu i prosledi podatke  */
}