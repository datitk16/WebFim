import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  dangNhapSubscription: Subscription;
  constructor() { }
  

  ngOnInit() {
  }
  login(formDN: NgForm){
  var taiKhoan = formDN.value.TaiKhoan;
  var matKhau = formDN.value.MatKhau;
  }
  
}
