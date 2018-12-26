import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DataStorageServiceService } from '../shared/services/data-storage-service.service';
import { ProductsService } from '../products/products.service';
import { ShopCartService } from '../shop-cart/shop-cart-service';
import { AdminSerivice } from '../admin/admin.service';
import { MessageService } from '../shared/services/message-data.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({


  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent

  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  providers:[
    DataStorageServiceService,
    ProductsService,
    ShopCartService,
    AdminSerivice,
    MessageService
  ]
})
export class CoreModule { }
