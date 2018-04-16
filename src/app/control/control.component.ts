import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Counter } from '../counter';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';//los objetos que tendremos en nuestra base de datos será observable, por eso incluimos esta linea

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() counter:Counter;
  @Output() onReset:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private af: AngularFireDatabase) { //af es el nombre y AngularFireDatabase es el tipo

  }

  ngOnInit() {
  }

  onAddClick(){
    this.counter.currentValue++;
  }

  onSubstractClick(){
    this.counter.currentValue--;
  }

  onResetClick(){
    this.onReset.emit(true);
  }

  onSaveClick(){
    this.af.list("/counters").push({
      date: new Date(),
      counter : this.counter.currentValue
    })
  }

  deleteFileUpload(){
    this.af.list("/counters").remove()
  }
}
