import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaPersonalidadComponent } from './entrevista-personalidad.component';

describe('EntrevistaPersonalidadComponent', () => {
  let component: EntrevistaPersonalidadComponent;
  let fixture: ComponentFixture<EntrevistaPersonalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistaPersonalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrevistaPersonalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
