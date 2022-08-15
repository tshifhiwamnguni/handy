import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-complete-jobs',
  templateUrl: './complete-jobs.component.html',
  styleUrls: ['./complete-jobs.component.scss']
})
export class CompleteJobsComponent implements OnInit {
  constructor(private jobs: JobsService, private req: RequestService) { }
  ngOnInit(): void {
    this.getcomplete()
  }
  complete:any

  async getcomplete() {
    await this.req.getComplete().subscribe(
    (data)=>{
      this.complete =data
    }
   )
  }
  ind= 0 
  set(i:any){
    this.ind = i
  }

}
