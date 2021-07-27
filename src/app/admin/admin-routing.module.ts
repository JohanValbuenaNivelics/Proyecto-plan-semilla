import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { CrearAspiranteComponent } from './components/crear-aspirante/crear-aspirante.component';
import { DashboardAspirantesComponent } from './components/dashboard-aspirantes/dashboard-aspirantes.component';
import { EntrevistaPersonalidadComponent } from './components/entrevista-personalidad/entrevista-personalidad.component';
import { EntrevistaTecnicaComponent } from './components/entrevista-tecnica/entrevista-tecnica.component';
import { NavComponent } from './components/nav/nav.component';
import { VerAspiranteComponent } from './components/ver-aspirante/ver-aspirante.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardAspirantesComponent,
      },
      {
        path: 'ver-aspirante',
        component: VerAspiranteComponent,
      },
      {
        path: 'crear-aspirante',
        component: CrearAspiranteComponent,
      },
      {
        path: 'entrevista-tecnica',
        component: EntrevistaTecnicaComponent,
      },
      {
        path: 'entrevista-personalidad',
        component: EntrevistaPersonalidadComponent,
      },
      {
        path: 'prueba',
        component: ContratacionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
