import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shopCart', component: ShopCartComponent },
  { path: 'administration', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'productsList', loadChildren: './products/products.module#ProductsModule' },
  { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),     


  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
