import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EmailedArticle } from '../interfaces/EmailedArticle';

@Injectable({
  providedIn: 'root'
})
export class EmailedService {


  constructor(private httpClient: HttpClient) { }

  //set the content-type
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  //set endpoint base
  endpoint = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/';

  //in the interest of time, I chose to set the key here
  //as a best practice, this would typically be set on the server
  key = 'pgTAl06h8ezKAAWwINIwRDcWZBNSZmWp';

  //grab the emailed articles
  getEmailedArticles(period: number = 1): Observable<EmailedArticle[]> {
    return this.httpClient.get<any>(this.endpoint + period + '.json?api-key=' + this.key)
    .pipe(
      //get the results from the response
      map((data) => data.results),
      //only include articles with an image
      map((x: Array<EmailedArticle>) => x.filter(obj => obj.media.length > 0)),
      catchError(this.handleError<EmailedArticle[]>('getEmailedArticles', []))
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
