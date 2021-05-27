import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private router: Router) { }

  currentRoute: string = '';

  heading: string = '';

  ngOnInit(): void {
    this.setHeading();
    this.setRouterSubscriber();
  }

  setRouterSubscriber(): void{
    this.router.events.subscribe((res) => { 
      this.currentRoute = this.router.url;
    })
  }

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
