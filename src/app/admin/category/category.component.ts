import { Component, OnInit, TemplateRef, Injectable } from '@angular/core';
import { CategoryModel } from 'src/app/shared/category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageServiceService } from 'src/app/shared/data-storage-service.service';
import { BsModalService, AlertComponent, BsModalRef } from 'ngx-bootstrap';
import { AdminComponent } from '../admin.component';
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
    let category = '';
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
