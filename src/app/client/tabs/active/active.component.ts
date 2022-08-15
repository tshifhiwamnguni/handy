import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  constructor(private requests: RequestService) { }
  ngOnInit(): void {
    this.getActive()
  }
  active:any

  async getActive() {
    await this.requests.getActive().subscribe(
    (data)=>{
      this.active =data
    }
   )
  }
}
