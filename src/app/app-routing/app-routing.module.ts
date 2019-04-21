import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


// const appRoutes: Routes =[
//  {path: '', component: HomeLayoutComponent, children:[
//     {path:'', component: IndexComponent},
//     {path:'dangky', component: DangKyComponent},
//     {path:'dangnhap', component: DangNhapComponent},
//     // Cách 1: truyền 1 tham số qua url
//     //{path:'chitiet/:id', component:DetailComponent}
//     //Cách 2: truyền nhiều tham số qua URL
//     {path:'chitiet', component:DetailComponent},
//     {path:'datghe/:id', component: DatGheComponent}
   
//  ]},
//  {path:'admin', component: AdminLayoutComponent, children:[
//    {path:'nguoidung', component: QuanLyNguoiDungComponent},
//    {path:'phim', component: QuanLyPhimComponent}
//  ]},
//  //Cach 1:
// //  {path:'**', component: NotFoundComponent}
// //Cach 2: redirectTo: dieu huong path
//   {path:'**', redirectTo:'', pathMatch:'full'}
// ];


/**
sử dụng lazyload để sử dụng đến đâu thì load đến đó
*/
const appRoutes: Routes = [
  {path:'', loadChildren:'../home/home.module#HomeModule'},
  {path:'admin', loadChildren:'../admin/admin.module#AdminModule'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),

  ]
})
export class AppRoutingModule { }
