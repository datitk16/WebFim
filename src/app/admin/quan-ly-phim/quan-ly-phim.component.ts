import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DanhSachPhimService } from 'src/app/services/danh-sach-phim.service';
import { PhimService } from 'src/app/services/phim.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {

  danhSachPhim: any[] =[];
  title: string='';
  editStatus;
  @ViewChild('formPhim') _formPhim:NgForm;

  setTitle(title){
    this.title = title;
    this.editStatus = false;
  }
  constructor( 
    private dataSV : DataTransferService, 
    private _danhSachPhimService: DanhSachPhimService, 
    private _phimSer: PhimService) { }

  // toggleDK(bool){
  //   this.dataSV.transferStatusFromDNToHeader.emit(bool);
  // }
  ngOnInit() {
    this.getPhim();
  }

  getPhim(){
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
  xoaPhim(maphim){
    this._phimSer.xoaPhim(maphim).subscribe(
      res =>{
        let index = this.danhSachPhim.findIndex(item => item.MaPhim === maphim);
        this.danhSachPhim.splice(index,1);
      },
      err => {
        console.log(err);
      }
    )
  }

  submitForm(form){
    if(!this.editStatus){
      this._phimSer.themPhim(form).subscribe(
        res=> {
          this.danhSachPhim.push(res);
          this.getPhim();
          this._formPhim.reset();
        },
        err=>{
          console.log(err);
        }
      )
    }
    else{
      this._phimSer.capNhatPhim(this._formPhim).subscribe(
        res=>{
          this.getPhim();
          this._formPhim.reset();
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

  capNhatPhim(thamso){
    this.title = 'Cập Nhật Phim';
    this.editStatus = true;
    let maPhim = thamso.getAttribute('data-maphim');
    let tenPhim = thamso.getAttribute('data-tenphim');
    let trailer = thamso.getAttribute('data-trailer');
    let hinhAnh = thamso.getAttribute('data-hinhanh');
    let moTa = thamso.getAttribute('data-mota');
    let maNhom = thamso.getAttribute('data-manhom');
    let ngayKhoiChieu = thamso.getAttribute('data-ngaykhoichieu');
    let danhGia = thamso.getAttribute('data-danhgia');
    this._formPhim.setValue({
      MaPhim: maPhim,
      TenPhim: tenPhim,
      Trailer: trailer,
      HinhAnh: hinhAnh,
      MoTa: moTa,
      MaNhom: maNhom,
      NgayKhoiChieu: ngayKhoiChieu,
      DanhGia: danhGia,
    })
  }
}
