import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RandomGeneratorPageComponent } from './Pages/random-generator-page/random-generator-page.component';
import { RangeSliderPageComponent } from './Pages/range-slider-page/range-slider-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RandomGeneratorPageComponent,
    RangeSliderPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
