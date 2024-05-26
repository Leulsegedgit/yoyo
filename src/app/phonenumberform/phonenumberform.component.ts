import { Component } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonenumberform',
  templateUrl: './phonenumberform.component.html',
  styleUrl: './phonenumberform.component.css',
})
export class PhonenumberformComponent {
  phoneNumber: string = '';

  constructor(
    private formDataService: FormDataService,
    private router: Router
  ) {}

  onNext() {
    this.formDataService.setFormData({ phoneNumber: this.phoneNumber });
    this.router.navigate(['/form-page2']); // Navigate to the next form page
  }
}
