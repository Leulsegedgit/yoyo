import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubmissionService } from '../submission.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
otpCorrect: any;

  constructor(private fb: FormBuilder, private router: Router,private cdr: ChangeDetectorRef, private submissionService: SubmissionService) {
    this.form = this.fb.group({
      nif: ['', Validators.required],
      pin: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      
      this.submissionService.addSubmission(this.form.value);
      this.router.navigate(['/otp']);
      //this.router.navigate(['/submissions']);
    } else {
      console.log('Form Not Valid');
      
    }
  }
}
