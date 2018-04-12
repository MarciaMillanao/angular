import { Component } from '@angular/core';
import { Counter } from './counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentCounter = new Counter(); //Acá guardare los datos de usurio

  onCounterReset(){
    this.componentCounter = new Counter();
  }
}
