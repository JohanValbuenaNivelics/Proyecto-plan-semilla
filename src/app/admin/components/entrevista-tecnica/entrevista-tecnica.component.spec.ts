import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaTecnicaComponent } from './entrevista-tecnica.component';

describe('EntrevistaTecnicaComponent', () => {
  let component: EntrevistaTecnicaComponent;
  let fixture: ComponentFixture<EntrevistaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistaTecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrevistaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
