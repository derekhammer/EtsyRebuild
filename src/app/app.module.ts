import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CatagoryComponent } from './catagory/catagory.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SlideShowComponent,
    CatagoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
