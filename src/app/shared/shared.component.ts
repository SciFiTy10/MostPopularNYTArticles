import { Component, OnInit } from '@angular/core';
import { SharedArticle } from '../../interfaces/SharedArticle';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  //declare an attribute for the articles to be returned
  response: SharedArticle[] | undefined;

  //inject the service via the constructor
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getShared();
  }

  //using the service, get the shared articles
  getShared(): void {
    this.sharedService.getSharedArticles()
      .subscribe(response => this.response = response);
  }

}
