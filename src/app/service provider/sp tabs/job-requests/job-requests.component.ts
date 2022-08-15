import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-job-requests',
  templateUrl: './job-requests.component.html',
  styleUrls: ['./job-requests.component.scss']
})
export class JobRequestsComponent implements OnInit {
  constructor(private req: RequestService, private store: StoreService) { }

  email:any
  ngOnInit(): void {
    this.getPendingId(this.store.currentUser.email)
    console.log(this.email);
    

  }
  jobRequest:any

  async getPendingId(data: any) {
    await this.req.getPendingId(data).subscribe(
    (data)=>{
      this.jobRequest =data
      console.log(data);
      
    }
   )
  }
  ind= 0 
  set(i:any){
    this.ind = i
  }

  accept(requestid:any){
    let status = { status: 'active'}

    this.req.updateRequest(status,requestid).subscribe(err=>{
      console.log(err);
      
    })
  }

  reject(requestid:any){
    let status = { status: 'rejected'}
    this.req.updateRequest(status,requestid).subscribe(err=>{
      console.log(err);
      
    })
  }
}
