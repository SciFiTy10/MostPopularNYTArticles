import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private router: Router) { }

  //declare attributes for the currentRoute and the heading above the articles
  currentRoute: string = '';
  heading: string = '';

  ngOnInit(): void {
    this.setRouterSubscriber();
  }

  //listen for changes to the route
  setRouterSubscriber(): void{
    this.router.events.subscribe((res) => { 
      this.currentRoute = this.router.url;
      this.setHeading();
    })
  }

  //set the heading based on the route value
  setHeading(): void{
    switch(this.currentRoute){
      case '/shared': {
        this.heading = 'Most Shared on Facebook';
        break;
      }
      case '/viewed': {
        this.heading = 'Most Viewed';
        break;
      }
      default: {
        this.heading = 'Most Emailed';
        break;
      }
    }
  }
}
