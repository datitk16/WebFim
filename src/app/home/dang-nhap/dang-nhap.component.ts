import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from 'src/app/services/nguoi-dung.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit, OnDestroy {

 dangNhapSubscription: Subscription;

  constructor(private _nguoiDung: NguoiDungService,public _router:Router, private dataSV: DataTransferService) { }
  dangNhap(formDN: NgForm) {
    var taiKhoan = formDN.value.TaiKhoan;
    var matKhau = formDN.value.MatKhau;

    this.dangNhapSubscription = this._nguoiDung.dangNhap(taiKhoan,matKhau).subscribe(
      res => {
        //nếu serve có trả về kết quả nhưng chưa chắc đăng nhập thành công(tài khoản hoặc mật khẩu sai)
        //thì sẽ hiển thị câu tài khoản sai
        //còn nếu serve trả về là 1 object thì chuyển hướng đến 1 đường dẫn tuyệt đối
        if(typeof res !== "string"){
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.showAlert();
          this._router.navigate(['/']);
        }
        else{
          alert('Tài khoản không tồn tại');
        }
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {

  }

  booleanDN(bool){
      this.dataSV.transferStatusFromDNToHeader.emit(bool);
    }

  ngOnDestroy(){
    console.log('destroy');
    if(this.dangNhapSubscription){
      this.dangNhapSubscription.unsubscribe();
    }
  }

  showAlert(){
    Swal({
      position: 'center',
      type: 'success',
      title: 'Đăng nhập thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
