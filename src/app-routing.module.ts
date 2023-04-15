import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./app/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'presupuesto',
    loadChildren: () =>
      import('./app/presupuesto/presupuesto.module').then(
        (m) => m.PresupuestoPageModule
      ),
  },
  {
    path: 'alumnos',
    loadChildren: () =>
      import('./app/alumnos/alumnos.module').then((m) => m.AlumnosPageModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./app/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'receptor',
    loadChildren: () =>
      import('./app/receptor/receptor.module').then(
        (m) => m.ReceptorPageModule
      ),
  },
  {
    path: 'receta',
    loadChildren: () =>
      import('./app/receta/receta.module').then((m) => m.RecetaPageModule),
  },
  {
    path: 'detalle-receta',
    loadChildren: () =>
      import('./app/detalle-receta/detalle-receta.module').then(
        (m) => m.DetalleRecetaPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./app/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
