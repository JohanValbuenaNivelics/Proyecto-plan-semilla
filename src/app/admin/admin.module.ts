import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { VerAspiranteComponent } from './components/ver-aspirante/ver-aspirante.component';
import { NavComponent } from './components/nav/nav.component';

import { DashboardAspirantesComponent } from './components/dashboard-aspirantes/dashboard-aspirantes.component';
import { MaterialModule } from '../material/material.module';
import { CrearAspiranteComponent } from './components/crear-aspirante/crear-aspirante.component';
import { EntrevistaTecnicaComponent } from './components/entrevista-tecnica/entrevista-tecnica.component';
import { EntrevistaPersonalidadComponent } from './components/entrevista-personalidad/entrevista-personalidad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContratacionComponent } from './components/contratacion/contratacion.component';

@NgModule({
  declarations: [
    VerAspiranteComponent,
    DashboardAspirantesComponent,
    NavComponent,
    CrearAspiranteComponent,
    EntrevistaTecnicaComponent,
    EntrevistaPersonalidadComponent,
    ContratacionComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  
  ]
})
export class AdminModule { }
