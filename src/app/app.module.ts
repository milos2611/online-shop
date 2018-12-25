import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule, ModalModule } from 'ngx-bootstrap';
import { InMemoryDataService } from './in-memory-data-service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from './shared/shared.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShopCartModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
   

    ModalModule.forRoot(),
    NgbModule.forRoot(),

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [
    NgbActiveModal,
    InMemoryDataService],
    bootstrap: [AppComponent],

  
})
export class AppModule { }
