import { Component, OnInit } from '@angular/core';
import { ViewedArticle } from '../../interfaces/ViewedArticle';
import { ViewedService } from '../viewed.service';

@Component({
  selector: 'app-viewed',
  templateUrl: './viewed.component.html',
  styleUrls: ['./viewed.component.css']
})
export class ViewedComponent implements OnInit {

  response: ViewedArticle[] | undefined;

  constructor(private viewedService: ViewedService) { }

  ngOnInit(): void {
    this.getViewed();
  }

  getViewed(): void {
    this.viewedService.getViewedArticles()
      .subscribe(response => this.response = response);
  }
}
