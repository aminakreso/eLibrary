import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikListComponent } from './korisnik-list.component';

describe('KorisnikListComponent', () => {
  let component: KorisnikListComponent;
  let fixture: ComponentFixture<KorisnikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
