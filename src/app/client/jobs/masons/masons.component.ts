import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-masons',
  templateUrl: './masons.component.html',
  styleUrls: ['./masons.component.scss']
})
export class MasonsComponent implements OnInit {

  constructor(private jobs: JobsService) { }

  ngOnInit(): void {
    this.getmasons()
  }
  masons:any

  async getmasons() {
    await this.jobs.getmasons().subscribe(
    (data)=>{
      this.masons =data
    }
   )
  }
  ind= 0 
  set(i:any){
    this.ind = i
  }
}
