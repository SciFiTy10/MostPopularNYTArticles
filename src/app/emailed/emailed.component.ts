import { Component, OnInit } from '@angular/core';
import { EmailedArticle } from '../../interfaces/EmailedArticle';
import { EmailedService } from '../emailed.service';

@Component({
  selector: 'app-emailed',
  templateUrl: './emailed.component.html',
  styleUrls: ['./emailed.component.css']
})
export class EmailedComponent implements OnInit {
  //declare an attribute for the array of articles
  response: EmailedArticle[] | undefined;

  //inject the service via the constructor
  constructor(private emailedService: EmailedService) { }

  ngOnInit(): void {
    this.getEmailed();
  }

  //call the service to retrieve the emailed articles
  getEmailed(): void {
    this.emailedService.getEmailedArticles()
      .subscribe(response => this.response = response);
  }

}
