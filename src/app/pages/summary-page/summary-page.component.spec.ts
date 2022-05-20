import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStoreService } from 'src/app/shared/services/localStore/local-store.service';
import { SummaryPageComponent } from './summary-page.component';

const localServiceStub = { loadState: () => ({name: 'Name'})};

describe('SummaryPageComponent', () => {
  let component: SummaryPageComponent;
  let fixture: ComponentFixture<SummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryPageComponent],
      imports: [RouterTestingModule],
      providers: [ { provide: LocalStoreService, useValue: localServiceStub } ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show name', () => {
    const name = fixture.nativeElement.querySelector('h1');
    expect(name.textContent).toContain('Name');
  });
});
