import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  currentRoute: string = '';

  ngOnInit(): void {
    this.setRouterSubscriber();
  }

  setRouterSubscriber(): void{
    this.router.events.subscribe((res) => { 
      this.currentRoute = this.router.url;
    })
  }
}
