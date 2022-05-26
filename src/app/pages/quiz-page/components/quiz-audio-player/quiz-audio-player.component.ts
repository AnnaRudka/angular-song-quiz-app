import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { API_URL } from 'src/app/constants';
import { AudioService } from 'src/app/shared/services/audio/audio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-audio-player',
  templateUrl: './quiz-audio-player.component.html',
  styleUrls: ['./quiz-audio-player.component.scss'],
  providers: [AudioService],
})
export class QuizAudioPlayerComponent implements OnInit {
  @Input() answer!: Answer;
  @Input() isSuccess!: boolean;
  apiUrl = API_URL;
  isPlayed = false;
  sub!: Subscription;

  constructor(private audioService: AudioService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['answer'] &&
      changes['answer'].currentValue !== changes['answer'].previousValue
    ) {
      this.audioService.setAudioTrack(`${this.apiUrl}/${this.answer.audio}`);
      this.isPlayed = false;
    }
  }
  ngOnInit(): void {
    this.audioService.playerStatus$.subscribe(status => {
      if (status === 'ended') {
        this.isPlayed = false;
      }
    });
  }

  onToggleClick(): void {
    this.isPlayed = !this.isPlayed;
    this.isPlayed ? this.audioService.play() : this.audioService.pause();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.audioService.pause();
  }
}
