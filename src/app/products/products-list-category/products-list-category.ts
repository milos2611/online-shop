import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { DataStorageServiceService } from 'src/app/shared/services/data-storage-service.service';
import { CategoryModel } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list-category.html',
  styleUrls: ['./products-list-category.css']
})
export class ProductsListComponent implements OnInit {


  categoryProduc: CategoryModel[];



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



