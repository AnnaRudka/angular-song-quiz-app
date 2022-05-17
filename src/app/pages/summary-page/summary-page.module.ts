import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SummaryPageComponent } from './summary-page.component';
import { ButtonModule } from '../../shared/components/button/button.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SummaryPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, LogoModule],
  exports: [SummaryPageComponent],
})
export class SummaryPageModule {}