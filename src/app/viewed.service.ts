import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ViewedArticle } from '../interfaces/ViewedArticle';

@Injectable({
  providedIn: 'root'
})
export class ViewedService {

  constructor(private httpClient: HttpClient) { }

  //set the content-type
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  //set the base url
  endpoint = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/';

  //in the interest of time, I chose to set the key here
  //as a best practice, this would typically be set on the server
  key = 'pgTAl06h8ezKAAWwINIwRDcWZBNSZmWp';

  //get the viewed articles
  getViewedArticles(period: number = 1): Observable<ViewedArticle[]> {
    return this.httpClient.get<any>(this.endpoint + period + '.json?api-key=' + this.key)
    .pipe(
      //grab the results from the response object
      map((data) => data.results),
      //only return articles with an image
      map((x: Array<ViewedArticle>) => x.filter(obj => obj.media.length > 0)),
      catchError(this.handleError<ViewedArticle[]>('getViewedArticles', []))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      //print to the console
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
