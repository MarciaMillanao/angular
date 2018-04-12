import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() counter:Counter;
  @Output() onReset:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

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

}
