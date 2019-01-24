import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Buku } from '../buku.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BukusService } from '../bukus.service';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css'],
  providers: [BukusService]
})
export class BukuAddComponent implements OnInit {

  bukuForm: FormGroup;

  @ViewChild('inputQty') inputQty: ElementRef;

  @Output() bukuAdded: EventEmitter<Buku> = new EventEmitter<Buku>();

  @Input() bukuChild: Buku;

  inputInfo: Buku = new Buku();
  constructor(private bukuServis: BukusService) { }

  ngOnInit() {
    this.bukuForm = new FormGroup({
      isbn: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      nama: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      qty: new FormControl(null, [Validators.required, this.cekIsEmpty])
    });
  }

  tambahBuku() {
    this.bukuAdded.emit(this.bukuServis.convertBuku(this.inputInfo));
    this.inputInfo = new Buku();
  }

  kirim() {
    const bukuModel = new Buku();

    bukuModel.isbn = this.bukuForm.get('isbn').value;
    bukuModel.nama = this.bukuForm.get('nama').value;
    bukuModel.qty = this.bukuForm.get('qty').value;
    console.log(bukuModel);
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return { 'blank': true }
    }
    return null;
  }

  /** 
    tambahBuku(inputEmail: HTMLInputElement) {
      console.log(this.inputInfo);
      console.log(inputEmail.value);
      console.log(this.inputContact.nativeElement.value);
  
      this.bukuAdded.emit(this.inputInfo);
      this.inputInfo = new Buku();
    }
  */
}
