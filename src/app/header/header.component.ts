import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //declare an attribute for the title
  title = 'Most Popular NYT Articles';

  constructor() { }

  ngOnInit(): void {
  }

}
