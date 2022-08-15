import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentLoggedIn: any;
 

  constructor(private store: StoreService) { }
  
  ngOnInit(): void {
    console.log("logged in " + this.store.currentUser);
    this.currentLoggedIn = this.store.currentUser.firstname
  }

}
