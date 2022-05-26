import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioService } from '../../services/audio/audio.service';

import { AudioProgressBarComponent } from './audio-progress-bar.component';

describe('AudioProgressBarComponent', () => {
  let component: AudioProgressBarComponent;
  let fixture: ComponentFixture<AudioProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioProgressBarComponent ],
      providers: [
        { provide: AudioService}
     ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
