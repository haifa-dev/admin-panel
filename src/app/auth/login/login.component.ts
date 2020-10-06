import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loading = false;
  form = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    console.log(this.form.value);
  }

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) return 'You must enter a value';
    if (formControl.hasError('minlength'))
      return `Password length must be at least ${formControl.errors.minlength.requiredLength} characters long`;
    if (formControl.hasError('maxlength'))
      return `Password length must be less than or equal to ${formControl.errors.maxlength.requiredLength} characters long`;
    if (formControl.hasError('pattern')) return 'Invalid format';
    return formControl.hasError('email') ? 'Not a valid email' : '';
  }
}
