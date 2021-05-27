import { Component, OnInit } from '@angular/core';
import { EmailedArticle } from '../../interfaces/EmailedArticle';
import { Observable } from 'rxjs';
import { EmailedService } from '../emailed.service';

@Component({
  selector: 'app-emailed',
  templateUrl: './emailed.component.html',
  styleUrls: ['./emailed.component.css']
})
export class EmailedComponent implements OnInit {

  response: EmailedArticle[] | undefined;

  constructor(private emailedService: EmailedService) { }

  ngOnInit(): void {
    this.getEmailed();
  }

  getEmailed(): void {
    this.emailedService.getEmailedArticles()
      .subscribe(response => this.response = response);
  }

}
