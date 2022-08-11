import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-plumbers',
  templateUrl: './plumbers.component.html',
  styleUrls: ['./plumbers.component.scss']
})
export class PlumbersComponent implements OnInit {
  work = [{Name: 'brand', id: 1}, {Name: 'kool', id: 2}]
  
  constructor(private jobs: JobsService) { }

  ngOnInit(): void {
    this.getplumbers()
  }
  ind= 0 
set(i:any){
  this.ind = i
}
plumbers:any

async getplumbers() {
  await this.jobs.getPlumber().subscribe(
  (data)=>{
    this.plumbers =data
  }
 )
}
}
