import { NgModule } from '@angular/core';
//dùng ở module nào thì import vào module đó

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';


@NgModule({
  declarations: [],
  imports: [
    
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxPasswordToggleModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxPasswordToggleModule
  ]
})
export class MaterialModule { }
