import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Buku} from '../buku.model';

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css']
})
export class BukuListComponent implements OnInit {

  @Input() bukuParent: Buku[];

  @Output() dariChildKeParent: EventEmitter<Buku> = new EventEmitter<Buku>();

  constructor() { }

  ngOnInit() {
  }

  showname(idx: number){
    this.dariChildKeParent.emit(this.bukuParent[idx]);
  }

}
