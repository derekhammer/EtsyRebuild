import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
{
  path: 'product',
  component: ProductComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
