import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ProductModal } from './products/products.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';





@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),


    NgbModule

  ],
  declarations: [
    AdminComponent,
    CategoryComponent,
    ProductModal

  ],
  
      entryComponents: [
        CategoryComponent,
        ProductModal
      ]
})
export class AdminModule { }
