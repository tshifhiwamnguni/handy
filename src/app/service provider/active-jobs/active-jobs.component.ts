import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-active-jobs',
  templateUrl: './active-jobs.component.html',
  styleUrls: ['./active-jobs.component.scss']
})
export class ActiveJobsComponent implements OnInit {

  constructor(private jobs: JobsService, public req: RequestService) { }
  ngOnInit(): void {
    this.getactiveJObs()
  }
  activeJObss:any

  async getactiveJObs() {
    await this.req.getActive().subscribe(
    (data)=>{
      this.activeJObss =data
    }
   )
  }
  
  ind= 0 
  set(i:any){
    this.ind = i
  }



  finish(requestid:any){
    let status = {
      status: 'complete'
    }
    this.req.updateRequest(status,requestid).subscribe(err=>{
      console.log(err);
      
    })
  }
}
