import { Component, OnInit } from '@angular/core';
import { ViewedArticle } from '../../interfaces/ViewedArticle';
import { ViewedService } from '../shared.service';

@Component({
  selector: 'app-viewed',
  templateUrl: './viewed.component.html',
  styleUrls: ['./viewed.component.css']
})
export class ViewedComponent implements OnInit {

  response: ViewedArticle[] | undefined;

  constructor(private emailedService: ViewedService) { }

  ngOnInit(): void {
    this.getViewed();
  }

  getViewed(): void {
    this.viewedService.getViewedArticles()
      .subscribe(response => this.response = response);
  }

}
