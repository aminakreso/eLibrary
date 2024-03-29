import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocijaListComponent } from './promocija-list.component';

describe('PromocijaListComponent', () => {
  let component: PromocijaListComponent;
  let fixture: ComponentFixture<PromocijaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocijaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocijaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
