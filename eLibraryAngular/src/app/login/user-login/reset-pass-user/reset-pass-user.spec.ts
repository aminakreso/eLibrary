import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassUserComponent } from './reset-pass-user.component';

describe('ResetPassUserComponent', () => {
  let component: ResetPassUserComponent;
  let fixture: ComponentFixture<ResetPassUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
