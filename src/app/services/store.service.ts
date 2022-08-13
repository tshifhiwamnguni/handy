import { Injectable } from '@angular/core';
import { Sp } from '../model/sp';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }


  sp!:any;

  getSp(): void{
     this.sp
  }


}
