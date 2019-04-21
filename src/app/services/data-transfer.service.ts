import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  @Output() transfer = new EventEmitter(); 
  @Output() transferStatusFromDNToHeader = new EventEmitter();
  @Output() themUserEvent = new EventEmitter; 
  constructor() { }
}
