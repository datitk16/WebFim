import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DanhSachNguoiDungService {

  constructor(private _http:Http) { }

  laydanhsachnguoidung(){
    let url='http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08';
    return this._http.get(url).pipe(map(
      (res: Response) => res.json()));
  }
}
