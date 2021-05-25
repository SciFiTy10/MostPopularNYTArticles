import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailedComponent } from './emailed.component';

describe('EmailedComponent', () => {
  let component: EmailedComponent;
  let fixture: ComponentFixture<EmailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
