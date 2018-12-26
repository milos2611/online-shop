import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { BsModalRef } from 'ngx-bootstrap';
import { DataStorageServiceService } from 'src/app/shared/services/data-storage-service.service';
import { AdminSerivice } from '../admin.service';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductModal implements OnInit {


  categoryForm: FormGroup;
  category = <CategoryModel>{};
  categoryList: CategoryModel[] = [];
  product = <ProductModel>{};
  productForm: FormGroup;

  editMode = false;

  data: CategoryModel;

  indexProduct: number;





  constructor(
    public modalRef: BsModalRef, private dataStorageServiceService: DataStorageServiceService
  ) { }

  ngOnInit() {
    this.initForm();

  }


  storeProduct() {

    for (let i = 0; i < this.categoryList.length; i++) {

      if (this.categoryList[i].name == this.productForm.value.category) {
        this.product.name = this.productForm.value.name;
        this.product.image = this.productForm.value.image;
        this.product.description = this.productForm.value.description;

        this.categoryList[i].products.push(this.product);
        this.dataStorageServiceService.storeProduct(this.categoryList[i]).subscribe((product) => {


        });
      }

    }
    this.productForm.reset();

  }

  editCategory() {

    this.data.products[this.indexProduct].name = this.productForm.value.name;
    this.data.products[this.indexProduct].description = this.productForm.value.description;
    this.data.products[this.indexProduct].image = this.productForm.value.image;

    this.dataStorageServiceService.editCategory(this.data).subscribe((category => {

    }))
  }

  private initForm() {

    let name = '';
    let description = '';
    let image = '';

    if (this.editMode) {

      name = this.data.products[this.indexProduct].name;
      description = this.data.products[this.indexProduct].description;
      image = this.data.products[this.indexProduct].image;
    }

    this.productForm = new FormGroup({
      'category': new FormControl(name, Validators.required),
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'image': new FormControl(image, Validators.required),
      'price': new FormControl(image, Validators.required)

    })
  }

}
