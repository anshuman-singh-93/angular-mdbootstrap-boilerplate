import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [SigninComponent, SignupComponent, PasswordForgetComponent, PasswordResetComponent]
})
export class AuthenticationModule { }
