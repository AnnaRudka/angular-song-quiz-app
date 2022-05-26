import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AudioService {
  audio: HTMLAudioElement;
  private _duration$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  duration$ = this._duration$.asObservable();
  private _timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  timeElapsed$ = this._timeElapsed$.asObservable();
  private _percentElapsed$: BehaviorSubject<number> = new BehaviorSubject(0);
  percentElapsed$ = this._percentElapsed$.asObservable();
  private _playerStatus$: BehaviorSubject<string> = new BehaviorSubject(
    'paused'
  );
  playerStatus$ = this._playerStatus$.asObservable();

  constructor() {
    this.audio = new Audio();
  }

  setAudioTrack(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private calculateTime = (event: Event) => {
    this.setDuration(this.audio.duration);
    this.setTimeElapsed(this.audio.currentTime);
    this.setPercentElapsed(this.audio.duration, this.audio.currentTime);
  };

  private setPlayerStatus = (event: Event) => {
    switch (event.type) {
      case 'playing':
        this._playerStatus$.next('playing');
        break;
      case 'pause':
        this._playerStatus$.next('paused');
        break;
      case 'ended':
        this._playerStatus$.next('ended');
        break;
      default:
        this._playerStatus$.next('paused');
        break;
    }
  };

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  private setDuration(duration: number): void {
    const result = this.getReadableTime(duration);
    this._duration$.next(result);
  }

  private setTimeElapsed(currentTime: number): void {
    const result = this.getReadableTime(currentTime);
    this._timeElapsed$.next(result);
  }

  private setPercentElapsed(duration: number, currentTime: number): void {
    this._percentElapsed$.next(Math.floor((100 / duration) * currentTime) || 0);
  }

  getReadableTime(time: number) {
    if (isNaN(time) || !time) {
      return "00:00"
    } 
    const total = Math.floor(time);
    const min = Math.floor(total / 60);
    let minutes = min >= 10 ? min : '0' + min;
    let sec = Math.floor(total % 60);
    let seconds = sec >= 10 ? sec : '0' + sec;
    return minutes + ':' + seconds;
  }
}
