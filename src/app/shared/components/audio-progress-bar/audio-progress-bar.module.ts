import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioProgressBarComponent } from './audio-progress-bar.component';

@NgModule({
  declarations: [AudioProgressBarComponent],
  imports: [CommonModule],
  exports: [
    AudioProgressBarComponent
  ]
})

export class AudioProgressBarModule { }
