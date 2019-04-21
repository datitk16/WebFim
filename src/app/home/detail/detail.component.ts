import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChiTietPhimService } from 'src/app/services/chi-tiet-phim.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  maPhim: string;
  phim:any = {};
  constructor(private _activatedRoute: ActivatedRoute, private _phimSV: ChiTietPhimService) { }

  ngOnInit() {
    // this._activatedRoute.params.subscribe(
    //   res =>{
    //     console.log(res);
    //     this.maPhim = res.id;
    //     this._phimSV.layChiTietPhim(this.maPhim).subscribe(
    //       res =>{
    //         console.log(res);
    //       },
    //       err=>{
    //         console.log(err);
    //       }
    //     )
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )

    this._activatedRoute.queryParams.subscribe(
      res => {
        this.maPhim = res.maphim;
        this._phimSV.layChiTietPhim(this.maPhim).subscribe(
          res => {
            this.phim = res;
            //custom lại trailer chuyển 'watched' thành 'embed'(chuyen chuoi thanh mang)
            console.log(this.phim);
            var trailerArr= this.phim.Trailer.split('watch?v=');
            console.log(trailerArr);
            this.phim.Trailer = `${trailerArr[0]}embed/${trailerArr[1]}`;
            console.log(this.phim.Trailer);

          },
          err => {
            console.log(err);
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }


}
