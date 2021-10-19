import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Products } from '../interfaces/Products';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  endpoint = 'http://localhost:8080/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' })
  };

  constructor(
    private httpClient: HttpClient
   
    ) { }
  
  getProduct(id:number): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Products fetched: ${id}`)),
        catchError(this.handleError<Products[]>(`Get products id=${id}`))
      );
  }

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Products retrieved!')),
        catchError(this.handleError<Products[]>('Get product', []))
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