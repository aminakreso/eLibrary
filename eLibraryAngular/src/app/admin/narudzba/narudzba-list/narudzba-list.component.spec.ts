import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarudzbaListComponent } from './narudzba-list.component';

describe('NarudzbaListComponent', () => {
  let component: NarudzbaListComponent;
  let fixture: ComponentFixture<NarudzbaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarudzbaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarudzbaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
