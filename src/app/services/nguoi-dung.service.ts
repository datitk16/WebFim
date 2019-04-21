import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';
@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  dangNhap(taiKhoan: string, matKhau: string) {
    var headerDN = new Headers();
    headerDN.append('Content-Type', 'application/json;charset=UTF-8');
    var url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    var obServe = this._http.post(url, undefined, { headers: headerDN })
      .pipe(map((res: Response) => res.json()));
    return obServe;
  }

  themUser(form) {
    let headerDK = new Headers();
    headerDK.append('Content-Type', 'application/json;charset=UTF-8');
    return this._http.post("http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",form.value, { headers: headerDK })
      .pipe(
        map((res: Response) => res.json())
      );
    
  }

  xoaNguoiDung(taikhoan){
    let url=`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`;
    return this._http.delete(url).pipe(map( 
      (res: Response) => res.json()));
  }

  capNhatNguoiDung(form){
    let headerDK = new Headers();
    headerDK.append('Content-Type', 'application/json;charset=UTF-8');
    let url=`http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    return this._http.post(url, form.value, {headers: headerDK}).pipe(map( 
      (res: Response)=> res.json() ));
  }

  constructor(private _http: Http) { }
}
