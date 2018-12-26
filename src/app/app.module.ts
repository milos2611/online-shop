import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
