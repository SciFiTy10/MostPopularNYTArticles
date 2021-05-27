import { Component, OnInit } from '@angular/core';
import { ViewedArticle } from '../../interfaces/ViewedArticle';
import { ViewedService } from '../viewed.service';

@Component({
  selector: 'app-viewed',
  templateUrl: './viewed.component.html',
  styleUrls: ['./viewed.component.css']
})
export class ViewedComponent implements OnInit {

  //declare an attribute for the viewed articles to be returned
  response: ViewedArticle[] | undefined;

  //inject the service via the constructor
  constructor(private viewedService: ViewedService) { }

  ngOnInit(): void {
    this.getViewed();
  }

  //using the viewedService, get the viewedArticles
  getViewed(): void {
    this.viewedService.getViewedArticles()
      .subscribe(response => this.response = response);
  }
}
