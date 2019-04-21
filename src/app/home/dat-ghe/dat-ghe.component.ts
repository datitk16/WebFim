import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChiTietPhimService } from 'src/app/services/chi-tiet-phim.service';
import { GheComponent } from './ghe/ghe.component';

@Component({
  selector: 'app-dat-ghe',
  templateUrl: './dat-ghe.component.html',
  styleUrls: ['./dat-ghe.component.css']
})
export class DatGheComponent implements OnInit {

  @ViewChildren(GheComponent) itemGheComs = new QueryList<GheComponent>();
  totalAmount = 0;

  danhSachGheDaDat: any[] =[];
  
  soGheDaDat: number = 0;
  soGheConLai: number = 0;

  constructor(private _activatedRouted: ActivatedRoute, private _phimSV: ChiTietPhimService) {}
  datGheParent(e){
    if(e.stt){
      this.soGheDaDat ++;
      this.soGheConLai --;
      this.danhSachGheDaDat.push(e.ghe);
      //tính tiền vé khi đc thêm vé vào
      this.totalAmount += e.ghe.GiaVe;
    }
    else{
      this.soGheDaDat --;
      this.soGheConLai ++;
      let index = this.danhSachGheDaDat.findIndex(item => item.SoGhe === e.ghe.SoGhe);
      if(index !== -1){
        this.danhSachGheDaDat.splice(index, 1);
        //trả lại tiền vé khi bỏ chọn 
      this.totalAmount -= e.ghe.GiaVe;
      };
      
    }
  }

  huyGhe(maghe:number, giave:number){
    let index = this.danhSachGheDaDat.findIndex(item => item.MaGhe === maghe);
    if(index !== -1){
      this.danhSachGheDaDat.splice(index, 1);
      this.soGheConLai ++;
      this.soGheDaDat --;
    }
    this.itemGheComs.forEach(item =>{
      if(item.ItemGhe.MaGhe === maghe){
        item.status = false;
      }
    })
    //trả lại tiền vé khi bỏ chọn 
    this.totalAmount -= giave;
  }

  danhSachGhe: any[] = [];
  maLichChieu: string;
  ngOnInit() {
    this._activatedRouted.params.subscribe(
      res =>{
        console.log(res);
        this.maLichChieu = res.id;
        this._phimSV.layChiTietPhongVe(this.maLichChieu).subscribe(
          res => {
            console.log(res);
            this.danhSachGhe = res.DanhSachGhe;
            for(let ghe of this.danhSachGhe){
              if(!ghe.DaDat){
                this.soGheConLai ++;
              }
            }
          },
          err => {
            console.log(err);
          }
        )
      }
    )

    
  }

}
