import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocijeListComponent } from './promocije-list.component';

describe('KnjigaComponent', () => {
  let component: PromocijeListComponent;
  let fixture: ComponentFixture<PromocijeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocijeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocijeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
