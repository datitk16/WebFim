import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this._auth.checkLogin();
    if(this._auth.getIsLogin()){
      return true;
    }
    else{
      alert('Vui lòng đăng nhập để đặt vé ghế!');
      this._router.navigate(['/dangnhap']);
    }
  }
}
