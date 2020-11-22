import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  inProgress = false;
  form = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255)
    ])
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.authenticated$.subscribe(authenticated => {
      if (authenticated === true) this.router.navigateByUrl('/dashboard');
    });
  }

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

        this._snackBar.open(message, undefined, {
          horizontalPosition: 'start',
          verticalPosition: 'bottom',
          panelClass: ['mat-toolbar', 'mat-warn'],
          duration: 3000
        });
        this.form.setErrors({ credentials: true });
      }
    });
  }

  isInvalid(controllerName: string): boolean {
    const formControl: AbstractControl = this.form.get(controllerName);
    return formControl.invalid;
  }

  getErrorMessage(controllerName: string): string {
    const formControl: AbstractControl = this.form.get(controllerName);
    if (formControl.hasError('required')) return 'You must enter a value';
    if (formControl.hasError('minlength'))
      return `Password length must be at least ${formControl.errors.minlength.requiredLength} characters long`;
    if (formControl.hasError('maxlength'))
      return `Password length must be less than or equal to ${formControl.errors.maxlength.requiredLength} characters long`;
    if (formControl.hasError('pattern')) return 'Invalid format';
    return formControl.hasError('email') ? 'Not a valid email' : '';
  }
}
