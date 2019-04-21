import { Component, OnInit } from '@angular/core';
import { ChiTietPhimService } from 'src/app/services/chi-tiet-phim.service';
import { DanhSachPhimService } from 'src/app/services/danh-sach-phim.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.css']
})
export class LichChieuComponent implements OnInit {
  danhSachPhim:any[] = [];
  maPhim: string;
  phim:any = {};
  constructor( private _danhSachPhimService: DanhSachPhimService,
    private _activatedRoute: ActivatedRoute,
    private _phimSV: ChiTietPhimService) { }

  ngOnInit() {
    this._danhSachPhimService.layDanhSachPhim().subscribe(
      res =>{
        this.danhSachPhim = res; 
        console.log(this.danhSachPhim);
      }
    )
  }
    
 
  
}
