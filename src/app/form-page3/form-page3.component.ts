import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-form-page3',
  templateUrl: './form-page3.component.html',
  styleUrls: ['./form-page3.component.css'],
})
export class FormPage3Component implements OnInit {
  formData: any = {
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    savePaymentDetails: false,
  };

  constructor(
    private formDataService: FormDataService,
    private router: Router
  ) {}

  ngOnInit() {
    const savedData = this.formDataService.getFormData();
    this.formData = { ...this.formData, ...savedData };
  }

  onSubmit() {
    this.formDataService.setFormData(this.formData);
    // Handle the payment processing or navigate to a confirmation page
    this.router.navigate(['/confirmation']); // Example navigation
  }
}
