import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanskakartaListComponent } from './clanskakarta-list.component';

describe('ClanskakartaListComponent', () => {
  let component: ClanskakartaListComponent;
  let fixture: ComponentFixture<ClanskakartaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanskakartaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanskakartaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
