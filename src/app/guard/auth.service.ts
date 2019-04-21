import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin: boolean = false;
  private isAdmin: boolean = false;
  getIsLogin(){
    return this.isLogin;
  }
  //khong can thiet co set
  // setIsLogin(bool){
  //   this.isLogin = bool;
  // } 

  //kiểm tra đăng nhập hay chưa
  checkLogin(){
    var localUser = localStorage.getItem('currentUser');
    if(localUser){
      this.isLogin = true;
      return JSON.parse(localUser);
    }
    else{
      this.isLogin = false;
    }
  }


  getIsAdmin(){
    return this.isAdmin;
  }
  //kiểm tra có phải admin hay không
  checkAdmin(){
    let localUser = this.checkLogin();
    if(localUser){
      if(localUser.MaLoaiNguoiDung === "QuanTri"){
        this.isAdmin = true;
      }
      else{
        this.isAdmin = false;
      }
    }
  }


  constructor() { }
}
