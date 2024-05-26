import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';
import { PhonenumberformComponent } from './phonenumberform/phonenumberform.component';
import { FormPage2Component } from './form-page2/form-page2.component';
import { FormPage3Component } from './form-page3/form-page3.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'phonenumber', component: PhonenumberformComponent },
  { path: 'form-page2', component: FormPage2Component },
  { path: 'form-page3', component: FormPage3Component },
  { path: 'confirmation', component: PaymentConfirmationComponent },
  { path: 'otp/:ref', component: OtpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'submissions',
    component: SubmissionsComponent,
    canActivate: [AdminGuard],
  },
  { path: '**', component: OtpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
