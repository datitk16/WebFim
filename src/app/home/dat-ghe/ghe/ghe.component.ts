import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input() ItemGhe;
  status: boolean = false;

  @Output() emitDatGhe= new EventEmitter();

  constructor() { }

  datGhe(){
    this.status = !this.status;
    this.emitDatGhe.emit({
      stt: this.status,
      ghe: this.ItemGhe,
    })
  }

 

  ngOnInit() {
  }

}
