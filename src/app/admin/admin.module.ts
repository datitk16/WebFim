import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng6O2ChartModule } from 'ng6-o2-chart';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [
    QuanLyPhimComponent, 
    QuanLyNguoiDungComponent, 
    AdminLayoutComponent, 
    AdminIndexComponent, 
    SidebarComponent, 
    HeaderComponent, 
    FooterComponent, 
    DashboardComponent, 
    LoginComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    Ng6O2ChartModule,
    FormsModule,
    MaterialModule,
    PipeModule,
  ],
  exports: [
    QuanLyPhimComponent,
    QuanLyNguoiDungComponent,
    AdminLayoutComponent,
    AdminIndexComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,

  ]
})
export class AdminModule { }
