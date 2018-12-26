import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageServiceService } from 'src/app/shared/services/data-storage-service.service';
import { BsModalRef } from 'ngx-bootstrap';
import { AdminSerivice } from '../admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  categoryForm: FormGroup;
  category = <CategoryModel>{};
  data: CategoryModel;
  editMode = false;


  constructor(
    public modalRef: BsModalRef, private dataStorageServiceService: DataStorageServiceService, private adminService: AdminSerivice) { }

  ngOnInit() {
    this.initForm();

  }
  private initForm() {
    let name = '';
    let description = '';
    let image = '';

    if (this.editMode) {
      name = this.data.name;
      description = this.data.description;
      image = this.data.image;
    }



    this.categoryForm = new FormGroup({

      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'image': new FormControl(image, Validators.required)
    })

  }

  storeCategory() {


    this.category.name = this.categoryForm.value.name;
    this.category.description = this.categoryForm.value.description;
    this.category.image = this.categoryForm.value.description;
    this.category.products = [];

    this.dataStorageServiceService.storeCategory(this.category).subscribe((category => {

      this.adminService.storeInCategory(category);

    }))
    this.categoryForm.reset();

  }

  editCategory() {
    this.data.name = this.categoryForm.value.name;
    this.data.description = this.categoryForm.value.description;
    this.data.image = this.categoryForm.value.image;

    this.dataStorageServiceService.editCategory(this.data).subscribe((category => {

    }))
  }

}
