import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFromComponent } from './register-from/register-from.component';

const routes: Routes = [
  { path: 'register', component: RegisterFromComponent } //Acá importo mi componente que cree anteriormente
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //forRoot, es un metodo que tiene mi componente(rutas) recibo mi caja vacia
  ],

  exports: [ RouterModule ], //agrego este exports para enviar mi caja ya llena de los datos

  declarations: []
})
export class AppRoutingModule { }
