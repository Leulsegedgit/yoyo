import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-form-page2',
  templateUrl: './form-page2.component.html',
  styleUrls: ['./form-page2.component.css'],
})
export class FormPage2Component implements OnInit {
  formData: any = {
    firstName: '',
    lastName: '',
    deliveryAddress: '',
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
    // Proceed to the next step or save the final form data
    this.router.navigate(['/form-page3']); // Navigate to the next form page
  }
}
