import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getCategoryFromServer();
  }

}
