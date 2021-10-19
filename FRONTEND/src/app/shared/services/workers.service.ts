import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Workers } from '../interfaces/Workers';


@Injectable({
  providedIn: 'root'
  })
  export class WorkersService {
    endpoint = 'http://localhost:8080/workers';

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' })
    };
  constructor(private httpClient: HttpClient) { }

  getWorker(id:number): Observable<Workers[]> {
    return this.httpClient.get<Workers[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Products fetched: ${id}`)),
        catchError(this.handleError<Workers[]>(`Get products id=${id}`))
      );
  }
  getWorkers(): Observable<Workers[]> {
    return this.httpClient.get<Workers[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Products retrieved!')),
        catchError(this.handleError<Workers[]>('Get product', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
