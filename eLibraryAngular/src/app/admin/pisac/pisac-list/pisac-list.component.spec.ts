import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisacListComponent } from './pisac-list.component';

describe('PisacListComponent', () => {
  let component: PisacListComponent;
  let fixture: ComponentFixture<PisacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisacListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
