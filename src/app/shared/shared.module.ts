import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SubmitButtonComponent],
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [],
})
export class SharedModule {}
