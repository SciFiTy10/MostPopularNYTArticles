import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  response: SharedArticle[] | undefined;

  regularDistribution = 100/3;

  constructor(private emailedService: SharedService) { }

  ngOnInit(): void {
    this.getShared();
  }

  getShared(): void {
    this.sharedService.getSharedArticles()
      .subscribe(response => this.response = response);
  }

}
