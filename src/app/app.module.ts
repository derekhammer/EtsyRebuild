import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { BottomInfoComponent } from './bottom-info/bottom-info.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SlideShowComponent,
    CatagoryComponent,
    BottomBarComponent,
    BottomInfoComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
