import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SharedArticle } from '../interfaces/SharedArticle';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  endpoint = 'https://api.nytimes.com/svc/mostpopular/v2/shared/';

  key = 'pgTAl06h8ezKAAWwINIwRDcWZBNSZmWp';

  getSharedArticles(period: number = 1): Observable<SharedArticle[]> {
    return this.httpClient.get<any>(this.endpoint + period + '/facebook.json?api-key=' + this.key)
    .pipe(
      map((data) => {
        return data.results;
      }),
      catchError(this.handleError<SharedArticle[]>('getSharedArticles', []))
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
