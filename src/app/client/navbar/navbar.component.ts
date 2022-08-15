import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private store : StoreService, private router: Router) { }
  currentLoggedIn = ''
  ngOnInit(): void {
    console.log("logged in " + this.store.currentUser);
    
    this.currentLoggedIn = this.store.currentUser.firstname

  }
logout(){
  this.store.currentUser='';
  this.router.navigateByUrl('/login')
}
}
