import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @Input() title = '';
  @Input() byline = '';
  @Input() abstract = '';
  @Input() imageUrl = '';
  @Input() section = '';
  @Input() url = '';

  ngOnInit(): void {
  }

}
