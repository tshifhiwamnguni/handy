import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-servs',
  templateUrl: './servs.component.html',
  styleUrls: ['./servs.component.scss']
})
export class ServsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.navigateByUrl('services/plumbers')
  }

}
