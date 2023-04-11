import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RandomGeneratorPageComponent } from './Pages/random-generator-page/random-generator-page.component';
import { RangeSliderPageComponent } from './Pages/range-slider-page/range-slider-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';

import { HeaderComponent } from './Components/header/header.component';
import { BtnComponent } from './Components/btn/btn.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RandomGeneratorPageComponent,
    RangeSliderPageComponent,
    NotFoundPageComponent,
    NavBarComponent,
    AboutPageComponent,
    HeaderComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
