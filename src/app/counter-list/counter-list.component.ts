import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters:FirebaseListObservable<any>;//any es decir que es obserbable en todos los elementos
  
  constructor(private af: AngularFireDatabase) {
    this.counters = this.af.list('/counters');
   }

  ngOnInit() {
  }

}
