import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAspirantesComponent } from './dashboard-aspirantes.component';

describe('DashboardAspirantesComponent', () => {
  let component: DashboardAspirantesComponent;
  let fixture: ComponentFixture<DashboardAspirantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAspirantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
