import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAspiranteComponent } from './crear-aspirante.component';

describe('CrearAspiranteComponent', () => {
  let component: CrearAspiranteComponent;
  let fixture: ComponentFixture<CrearAspiranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAspiranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
