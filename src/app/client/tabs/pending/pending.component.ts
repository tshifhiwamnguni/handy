import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  constructor(private requests: RequestService) { }
  ngOnInit(): void {
    this.getPending()
  }
  pending:any

  async getPending() {
    await this.requests.getPending().subscribe(
    (data)=>{
      this.pending =data
    }
   )
  }

}
