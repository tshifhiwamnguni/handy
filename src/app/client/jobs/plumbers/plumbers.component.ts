import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plumbers',
  templateUrl: './plumbers.component.html',
  styleUrls: ['./plumbers.component.scss']
})
export class PlumbersComponent implements OnInit {
  work = [{Name: 'brand', id: 1}, {Name: 'kool', id: 2}]
  ind: any 
  constructor() { }

  ngOnInit(): void {
  }
set(i:any){
  this.ind = i
}
}
