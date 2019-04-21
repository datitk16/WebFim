import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { DangKyComponent } from '../dang-ky/dang-ky.component';
import { DangNhapComponent } from '../dang-nhap/dang-nhap.component';
import { DetailComponent } from '../detail/detail.component';
import { DatGheComponent } from '../dat-ghe/dat-ghe.component';
import { IndexComponent } from '../index/index.component';
import { LoginGuard } from 'src/app/guard/login.guard';
import { BlogComponent } from '../blog/blog.component';
import { LienHeComponent } from '../lien-he/lien-he.component';
import { LichChieuComponent } from '../lich-chieu/lich-chieu.component';

const homeRouting: Routes = [
  {path: '', component: HomeLayoutComponent, children:[
    {path:'dangky', component: DangKyComponent},
    {path:'dangnhap', component: DangNhapComponent},
//     // Cách 1: truyền 1 tham số qua url
//     //{path:'chitiet/:id', component:DetailComponent}
//     //Cách 2: truyền nhiều tham số qua URL
    {path:'chitiet', component:DetailComponent},
    {path:'datghe/:id', component: DatGheComponent, canActivate:[LoginGuard]},
    {path:'tintuc', component: BlogComponent},
    {path:'lienhe', component: LienHeComponent},
    {path:'lichchieu', component: LichChieuComponent},
    {path:'', component: IndexComponent}
    
  ]},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouting),
  ]
})
export class HomeRoutingModule { }
