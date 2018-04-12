import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() counter:Counter;

  constructor() { }

  ngOnInit() {
  }

}
