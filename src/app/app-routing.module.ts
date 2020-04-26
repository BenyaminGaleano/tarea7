import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoNotaComponent } from './components/listado-nota/listado-nota.component';
import { IngresoNotaComponent } from './components/ingreso-nota/ingreso-nota.component';


const routes: Routes = [
  {path: 'listado', component: ListadoNotaComponent},
  {path: 'registro', component: IngresoNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
