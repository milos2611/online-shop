import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ProductModal } from './products/products.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    NgbModule,
    AlertModule.forRoot()

  ],
  declarations: [
    AdminComponent,
    CategoryComponent,
    ProductModal

  ]
  , entryComponents: [
    CategoryComponent,
    ProductModal
  ]

})
export class AdminModule { }
