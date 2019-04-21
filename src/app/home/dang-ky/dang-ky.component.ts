import { Component, OnInit } from '@angular/core';

import {Http,Headers,Response} from '@angular/http';
import {map} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  //dependence injection
  constructor( private _http: Http ) { }
  dangKy(form){
    let headerDK = new Headers();
    headerDK.append('Content-Type','application/json;charset=UTF-8');
    this._http.post("http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung", form.value, {headers: headerDK})
    .pipe(
      map( (res: Response) => res.json())
    )
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }


  ngOnInit() {
  }
  /*
   * Swal of SweetAlert
   */
  showAlert(){
    Swal({
      position: 'top-end',
      type: 'success',
      title: 'Đăng ký thành công',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
