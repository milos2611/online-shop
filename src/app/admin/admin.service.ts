import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CategoryModel } from "../shared/models/category.model";
import { ShopCartService } from "../shop-cart/shop-cart-service";
import { DataStorageServiceService } from "../shared/services/data-storage-service.service";

@Injectable()
export class AdminSerivice {

    cateogoryChanged = new Subject<CategoryModel[]>();


    categoryList: CategoryModel[] = []; 




    constructor( private dataStorageServiceServiceta: DataStorageServiceService, ) {
    }


    getCagegoryFromServer() {
        this.dataStorageServiceServiceta.getCategory().subscribe((category: CategoryModel[]) => {
            this.categoryList = category;
            this.cateogoryChanged.next(this.categoryList.slice())
        })
    }

    storeInCategory(category: CategoryModel) {
        this.categoryList.push(category);
        this.cateogoryChanged.next(this.categoryList.slice())
    }

 


}

