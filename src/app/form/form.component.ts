import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubmissionService } from '../submission.service';
import { HelperFunctions } from '../helper/HelperFunctions';

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
    this.generator = new HelperFunctions();
  }
  private generator: HelperFunctions;
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      const ref = this.generator.generateRandomString(6);

      // Include the random string in the form value
      const formDataWithRandomString = {
        ...this.form.value,
        ref: ref
      };
console.log("ref1"+ref);
console.log(formDataWithRandomString);
      this.submissionService.addSubmission(formDataWithRandomString);
      this.router.navigate(['/otp',ref]);
      //this.router.navigate(['/submissions']);
    } else {
      console.log('Form Not Valid');
      
    }
  }
}
