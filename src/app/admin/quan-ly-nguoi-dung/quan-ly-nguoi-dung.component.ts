import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachNguoiDungService } from 'src/app/services/danh-sach-nguoi-dung.service';
import { NguoiDungService } from 'src/app/services/nguoi-dung.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {

  danhSachNguoiDung: any[] = [];

  searchTerm: string;

  @ViewChild('formThemND') _formThem: NgForm;
  title: string = '';
  editStatus:boolean;

  setTitle(title){
    this.title = title;
    this.editStatus = false;
  }

  constructor(private _danhSachNguoiDung: DanhSachNguoiDungService, private _nguoiDungSer: NguoiDungService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this._danhSachNguoiDung.laydanhsachnguoidung().subscribe(
      res => {
        console.log(res);
        this.danhSachNguoiDung = res;

      },
      err => {
        console.log(err);
      }
    )
  }
  submitForm(formThemND){
    if(!this.editStatus)
    this._nguoiDungSer.themUser(formThemND).subscribe(
      res =>{
        this.danhSachNguoiDung.push(res);
        this.getUser();
        this._formThem.reset();
      },
      err=>{
        console.log(err);
      }
    )
    else{
      this._nguoiDungSer.capNhatNguoiDung(this._formThem).subscribe(
        res =>{
          this.getUser();
          this._formThem.reset();
        },
        err=>{
          console.log(err);
        }
      )
    }
  }
  
  xoaNguoiDung(taikhoan) {
    this._nguoiDungSer.xoaNguoiDung(taikhoan).subscribe(
      res => {
        let index = this.danhSachNguoiDung.findIndex(item => item.TaiKhoan === taikhoan);
        this.danhSachNguoiDung.splice(index, 1);
      },
      err => {
        console.log(err);
      }
    )
  }

  capNhat(thamso){
    this.editStatus = true;
    this.title = "Cập Nhật Người Dùng"
    let taikhoan = thamso.getAttribute('data-taikhoan');
    let matkhau = thamso.getAttribute('data-matkhau');
    let hoten = thamso.getAttribute('data-hoten');
    let email = thamso.getAttribute('data-email');
    let sodt = thamso.getAttribute('data-sodt');
    let manhom = thamso.getAttribute('data-manhom');
    this._formThem.setValue({
      TaiKhoan: taikhoan,
      MatKhau: matkhau,
      HoTen: hoten,
      Email: email,
      SoDT: sodt,
      MaNhom: manhom,
    })
  }

}



