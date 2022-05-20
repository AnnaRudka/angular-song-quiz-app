import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { QuizHeaderComponent } from './quiz-header.component';

describe('QuizHeaderComponent', () => {
  let component: QuizHeaderComponent;
  let fixture: ComponentFixture<QuizHeaderComponent>;

  const elements = {
    getHeader: () => fixture.debugElement.query(By.css('header')),
    getUserName: () => fixture.debugElement.query(By.css('.header-user__name')),
    getScore: () => fixture.debugElement.query(By.css('.header-user__score')),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render header', () => {
    expect(elements.getHeader()).toBeTruthy();
  });

  it('should render score', () => {
    expect(elements.getScore()).toBeTruthy();
  });

  it('should display user name in uppercase', () => {
    const expectedUser = { id: 1, name: 'Test' };
    component.user = expectedUser;
    const expectedPipedName = expectedUser.name.toUpperCase();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const userEl = elements.getUserName().nativeElement;
      expect(userEl.textContent).toContain(expectedPipedName);
    });
  });
});
