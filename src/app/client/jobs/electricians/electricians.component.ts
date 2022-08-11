import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-electricians',
  templateUrl: './electricians.component.html',
  styleUrls: ['./electricians.component.scss']
})
export class ElectriciansComponent implements OnInit {
  constructor(private jobs: JobsService) { }
  ngOnInit(): void {
    this.getElects()
  }
  electticians:any

  async getElects() {
    await this.jobs.getElects().subscribe(
    (data)=>{
      this.electticians =data
    }
   )
  }
  ind= 0 
  set(i:any){
    this.ind = i
  }
}



