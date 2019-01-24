import { Injectable } from '@angular/core';
import { Buku } from './buku.model';

@Injectable({
  providedIn: 'root'
})
export class BukusService {
  constructor() { }

  convertBuku(bukuInfo: Buku): Buku {
    //bukuInfo.nama = bukuInfo.nama.toUpperCase()+' - edited';
    return bukuInfo;
  }
}
