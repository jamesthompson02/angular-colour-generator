import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RandomGeneratorPageComponent } from './Pages/random-generator-page/random-generator-page.component';
import { RangeSliderPageComponent } from './Pages/range-slider-page/range-slider-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';

import { HeaderComponent } from './Components/header/header.component';
import { BtnComponent } from './Components/btn/btn.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SubHeaderComponent } from './Components/sub-header/sub-header.component';
import { RandomCardServiceComponent } from './Components/random-card-service/random-card-service.component';
import { HexadecimalDisplayComponent } from './Components/hexadecimal-display/hexadecimal-display.component';

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
    BtnComponent,
    SubHeaderComponent,
    RandomCardServiceComponent,
    HexadecimalDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
