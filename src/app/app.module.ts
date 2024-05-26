import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { FormComponent } from './form/form.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { PhonenumberformComponent } from './phonenumberform/phonenumberform.component';
import { FormPage2Component } from './form-page2/form-page2.component';
import { FormPage3Component } from './form-page3/form-page3.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    FormComponent,
    SubmissionsComponent,
    LoginComponent,
    SpinnerComponent,
    PhonenumberformComponent,
    FormPage2Component,
    FormPage3Component,
    PaymentConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
