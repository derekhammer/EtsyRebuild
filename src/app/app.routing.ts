import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'

const appRoutes: Routes = [
{
  path: 'product',
  component: ProductComponent
},
{
  path: 'product/:id',
  component: ProductDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
