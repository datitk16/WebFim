import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { QuanLyNguoiDungComponent } from '../quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from '../quan-ly-phim/quan-ly-phim.component';
import { AdminGuard } from 'src/app/guard/admin.guard';
import { AdminIndexComponent } from '../admin-index/admin-index.component';
import { LoginComponent } from '../login/login.component';

/**
 * canActivate:[AdminGuard]
 */
const AdminRoutes: Routes = [
  {path: '', component: AdminLayoutComponent, children:[
    {path:'', component: AdminIndexComponent},
    {path:'nguoidung', component: QuanLyNguoiDungComponent},
    {path:'phim', component: QuanLyPhimComponent},
    {path:'login', component: LoginComponent}
//  ]},
//  //Cach 1:
// //  {path:'**', component: NotFoundComponent}
// //Cach 2: redirectTo: dieu huong path
//   {path:'**', redirectTo:'', pathMatch:'full'}
  ]},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(AdminRoutes),
  ]
})
export class AdminRoutingModule { }
