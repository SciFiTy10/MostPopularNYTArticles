import { Component, OnInit } from '@angular/core';
import { SharedArticle } from '../../interfaces/SharedArticle';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  response: SharedArticle[] | undefined;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getShared();
  }

  getShared(): void {
    this.sharedService.getSharedArticles()
      .subscribe(response => this.response = response);
  }

}
