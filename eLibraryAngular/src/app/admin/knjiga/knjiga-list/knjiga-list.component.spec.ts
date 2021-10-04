import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaListComponent } from './knjiga-list.component';

describe('KnjigaListComponent', () => {
  let component: KnjigaListComponent;
  let fixture: ComponentFixture<KnjigaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnjigaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
