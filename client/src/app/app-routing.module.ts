import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { RandomGeneratorPageComponent } from './Pages/random-generator-page/random-generator-page.component';
import { RangeSliderPageComponent } from './Pages/range-slider-page/range-slider-page.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'random', component: RandomGeneratorPageComponent },
    { path: 'slider', component: RangeSliderPageComponent },
    { path: '**', component: NotFoundPageComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }