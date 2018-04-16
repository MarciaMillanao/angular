import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DisplayComponent } from './display/display.component';
import { ControlComponent } from './control/control.component';
import { RegisterFromComponent } from './register-from/register-from.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2'; //acá importo todo desde la pagina de feribase
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service'; //auth service tenemos que crearlo luego nosotros desde la consola
import { AngularFireDatabase } from 'angularfire2/database-deprecated;
import { CounterListComponent } from './counter-list/counter-list.component'';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DisplayComponent,
    ControlComponent,
    RegisterFromComponen,
    CounterListComponentt
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), //Acá inicializamos feribase
    AngularFireAuthModule
  ],
  providers: [AuthService, AngularFireDatabase],//acá inyecto todo lo que voy a necesitar
  bootstrap: [AppComponent]
})
export class AppModule { }
