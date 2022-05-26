import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/shared/services/audio/audio.service';

@Component({
  selector: 'app-audio-progress-bar',
  templateUrl: './audio-progress-bar.component.html',
  styleUrls: ['./audio-progress-bar.component.scss'],
})
export class AudioProgressBarComponent implements OnInit {
  currentTime$ = this.audioService.timeElapsed$;
  duration$ = this.audioService.duration$;
  currentRange$ = this.audioService.percentElapsed$;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {}

  onRangeChange(event: Event) {
    const currentTime = Math.floor(
      (Number((event.target as HTMLInputElement).value) *
        this.audioService.audio.duration) /
        100
    );
    this.audioService.audio.currentTime = currentTime;
  }
}
