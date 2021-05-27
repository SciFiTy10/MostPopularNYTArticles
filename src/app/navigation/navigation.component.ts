import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  //declare an attribute for the currentRoute
  currentRoute: string = '';

  ngOnInit(): void {
    this.setRouterSubscriber();
  }

  //listen for changes to the current route
  setRouterSubscriber(): void{
    this.router.events.subscribe((res) => { 
      this.currentRoute = this.router.url;
    })
  }
}
