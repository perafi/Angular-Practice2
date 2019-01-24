import { Component, OnInit } from '@angular/core';
import { Buku } from './buku.model';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  bukuList: Buku[] = [];
  bukuEdit: Buku = new Buku();

  constructor() { }

  ngOnInit() {
  }

  onBukuAdded(bukuInfo: Buku) {
    this.bukuList.push(bukuInfo);
    console.log(this.bukuList);
  }

  onBukuEdit(bukuInfo: Buku) {
    this.bukuEdit = bukuInfo;
    console.log(this.bukuEdit);
  }

}
