import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { DiscountProductsComponent } from './components/discount-products/discount-products.component';
import { TopProductsComponent } from './components/top-products/top-products.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    NewProductsComponent,
    DiscountProductsComponent,
    TopProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
