import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productsService: ProductsService) {
   // this.productsService.getCategoryFromServer();

  }

  ngOnInit() {
   
  }

  

}
