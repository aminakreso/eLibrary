import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplataListComponent } from './uplata-list.component';

describe('UplataListComponent', () => {
  let component: UplataListComponent;
  let fixture: ComponentFixture<UplataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
