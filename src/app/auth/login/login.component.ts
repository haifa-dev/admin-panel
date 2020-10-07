import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  inProgress = false;
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
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) return;
    this.inProgress = true;
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.inProgress = false;
        this.router.navigateByUrl('/dashboard');
      },
      error: ({ error }) => {
        this.inProgress = false;
        let message = error.status ? error.message : 'Network Connection Error';

        this.snackBar.open(message, null, {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-warn'],
        });

        this.form.setErrors({ credentials: true });
      },
    });
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
