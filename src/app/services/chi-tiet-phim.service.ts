import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChiTietPhimService {

  constructor(private _http:Http) { }

  layChiTietPhim(maphim:string){
  return this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maphim}`).pipe(
    map((res:Response) => res.json()))
   
}

  layChiTietPhongVe(malichchieu:string){
    let url=`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`
    return this._http.get(url).pipe(map(
      (res: Response) => res.json()))
  }

}
