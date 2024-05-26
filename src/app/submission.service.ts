// submission.service.ts
import { Injectable } from '@angular/core';

interface Submission {
  phoneNumber: string;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  securityCode: string;
  otp: string;
  ref: string;
}

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  private localStorageKey = 'submissions';

  constructor() {}

  // addSubmission(submission: Submission): void {
  //   const submissions = this.getSubmissions();
  //   submissions.push(submission);
  //   this.updateSubmissions(submissions);
  // }

  // getSubmissions(): Submission[] {
  //   const submissionsJson = localStorage.getItem(this.localStorageKey);
  //   return submissionsJson ? JSON.parse(submissionsJson) : [];
  // }

  // updateSubmissions(submissions: Submission[]): void {
  //   localStorage.setItem(this.localStorageKey, JSON.stringify(submissions));
  // }
}
