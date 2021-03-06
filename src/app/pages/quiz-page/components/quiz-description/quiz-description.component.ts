import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { API_URL } from 'src/app/constants';
import { AudioService } from 'src/app/shared/services/audio/audio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-description',
  templateUrl: './quiz-description.component.html',
  styleUrls: ['./quiz-description.component.scss'],
  providers: [AudioService]
})
export class QuizDescriptionComponent implements OnInit {
  @Input() answer!: Answer;
  @Input() index!: number;
  apiUrl = API_URL;
  isPlayed = false;
  sub!: Subscription;

  constructor(private audioService: AudioService) {}

  ngOnChanges() {
      this.audioService.setAudioTrack(`${this.apiUrl}/${this.answer.audio}`);
      this.isPlayed = false;
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

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.audioService.pause();
  }
}
