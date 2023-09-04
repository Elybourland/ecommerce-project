import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SigninBarComponent } from './components/header/signin-bar/signin-bar.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    SigninBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
