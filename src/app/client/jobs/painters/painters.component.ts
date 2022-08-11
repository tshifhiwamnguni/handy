import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.scss']
})
export class PaintersComponent implements OnInit {

  constructor(private jobs: JobsService) { }

  ngOnInit(): void {
    this.getpainters()
  }
  painters:any

  async getpainters() {
    await this.jobs.getpainters().subscribe(
    (data)=>{
      this.painters =data
    }
   )
  }
  ind= 0 
  set(i:any){
    this.ind = i
  }
}
