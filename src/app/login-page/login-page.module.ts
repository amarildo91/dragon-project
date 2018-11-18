import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, UiModule
  ],
  declarations: [LoginPageComponent],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
