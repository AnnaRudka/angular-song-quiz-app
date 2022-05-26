import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAudioPlayerComponent } from './quiz-audio-player.component';

describe('QuizAudioPlayerComponent', () => {
  let component: QuizAudioPlayerComponent;
  let fixture: ComponentFixture<QuizAudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAudioPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show audio default image', () => {
    const image = fixture.nativeElement.querySelector('.audio-player__image--default');
    expect(image).toBeTruthy();
  });

});
