// submission.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Submission {
  nif: string;
  pin: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private localStorageKey = 'submissions';
 
  constructor() { }

  addSubmission(submission: Submission): void {
    const submissions = this.getSubmissions();
    submissions.push(submission);
    localStorage.setItem(this.localStorageKey, JSON.stringify(submissions));
   
  }

  getSubmissions(): Submission[] {
    const submissionsJson = localStorage.getItem(this.localStorageKey);
    return submissionsJson ? JSON.parse(submissionsJson) : [];
  }
}
