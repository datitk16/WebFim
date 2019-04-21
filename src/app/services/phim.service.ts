import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private _http: Http) { }

  xoaPhim(maphim){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`;
    return this._http.delete(url).pipe(map( (res: Response)=> res.json() ));
  }

  themPhim(form){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    let headerThem = new Headers();
    headerThem.append('Content-Type', 'application/json;charset=UTF-8');
    return this._http.post(url, form.value, { headers: headerThem }).pipe(
      map( 
        (res:Response)=> res.json()));
  }

  capNhatPhim(form){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    let headerCapNhat = new Headers();
    headerCapNhat.append('Content-Type', 'application/json;charset=UTF-8');
    return this._http.post(url, form.value, {headers: headerCapNhat}).pipe(map( 
      (res: Response) =>res.json()));
  }
}
