import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoryectosComponent } from './poryectos.component';

describe('PoryectosComponent', () => {
  let component: PoryectosComponent;
  let fixture: ComponentFixture<PoryectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoryectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoryectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
