import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrListComponent } from './zanr-list.component';

describe('ZanrListComponent', () => {
  let component: ZanrListComponent;
  let fixture: ComponentFixture<ZanrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
