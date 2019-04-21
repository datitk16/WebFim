import { Component, OnInit } from '@angular/core';
import { DanhSachPhimService } from 'src/app/services/danh-sach-phim.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  danhSachPhim: any[] = [];
  constructor(private _danhSachPhimService: DanhSachPhimService ) { }

  //Vòng đời của component, khi component được khởi tạo
  ngOnInit() {
    this._danhSachPhimService.layDanhSachPhim().subscribe(
      res =>{
        console.log(res);
        this.danhSachPhim = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

}
