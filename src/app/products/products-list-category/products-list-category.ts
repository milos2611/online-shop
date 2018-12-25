import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';
import { CategoryModel } from 'src/app/shared/category.model';
import { DataStorageServiceService } from 'src/app/shared/data-storage-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list-category.html',
  styleUrls: ['./products-list-category.css']
})
export class ProductsListComponent implements OnInit {


  categoryProduc: CategoryModel[];
  subscription: Subscription;
  @Input('selectedCategory') selectedCategory;



  constructor(private productsService: ProductsService, private dataStorageServiceServiceta: DataStorageServiceService) { }

  ngOnInit() {

    this.dataStorageServiceServiceta.getCategory().subscribe((category: CategoryModel[]) => {
      this.categoryProduc = category;
    })
  }

  /*
    this.subscription = this.productsService.cateogoryChange.subscribe(
      (category: CategoryModel[]) => {
        this.categoryProduc = category;
      }
    );
   this.categoryProduc = this.productsService.getCategory(); */





}



