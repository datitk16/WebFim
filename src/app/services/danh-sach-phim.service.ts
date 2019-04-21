import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DanhSachPhimService {
  
  constructor(private _http:Http) { }

  layDanhSachPhim(){
    let url='http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP08';
    return this._http.get(url).pipe(map( 
      (res: Response) => res.json()));
  }
}
