import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnickiRacunListComponent } from './korisnickiracun-list.component';

describe('KorisnickiRacunListComponent', () => {
  let component: KorisnickiRacunListComponent;
  let fixture: ComponentFixture<KorisnickiRacunListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnickiRacunListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnickiRacunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
