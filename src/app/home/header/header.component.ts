import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any = User;

  statusDN: boolean = false;
  constructor(private _dataSV: DataTransferService, private router: Router) {}

  ngOnInit() {
    let currentUser = localStorage.getItem('currentUser');
    if(currentUser) {
      this.user = JSON.parse(currentUser);
    }
  
    //display boolean true từ dangnhap qua header 
    this._dataSV.transferStatusFromDNToHeader.subscribe(
        (res) => {
          console.log(res);
          this.statusDN = res;
        }
      )
  } 

  logOut(){
    this.statusDN = false;
    this.router.navigate(['/dangnhap']);
  }
}
