import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  //declare props
  @Input() title = '';
  @Input() byline = '';
  @Input() abstract = '';
  @Input() imageUrl = '';
  @Input() section = '';
  @Input() url = '';
  @Input() alt = '';

  ngOnInit(): void {
  }

  //open an article via its url
  openArticle(url: string): void{
    location.href = url;
  }
}
