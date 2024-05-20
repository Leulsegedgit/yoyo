import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'submissions', component: SubmissionsComponent, canActivate: [AdminGuard] },
  { path: '**', component: OtpComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
