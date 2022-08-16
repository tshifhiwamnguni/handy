import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-plumbers',
  templateUrl: './plumbers.component.html',
  styleUrls: ['./plumbers.component.scss']
})
export class PlumbersComponent implements OnInit {
  work = [{Name: 'brand', id: 1}, {Name: 'kool', id: 2}]
  
  constructor(
    private jobs: JobsService,
    private store: StoreService,
    private router: Router
    ) { }

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
    console.table(data)
  }
 )
}


book(spname: string, spemail: string){
  let spDetails  = {
    spname : spname,
    spemail: spemail
  }
  this.store.spDetails = spDetails
  console.log(this.store.spDetails );
  
  this.router.navigateByUrl('/book')
}

}
