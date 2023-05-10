import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { BookData } from './global.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const apiUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  // readonly APIUrl = 'http://localhost:3000/Customers';
  // customers: Customer[];

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getBooks() {
    return this.http.get(apiUrl);
  }

  getBook(id: string): Observable<any> {
    const url = `${apiUrl}${id}`;
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError));
  }

  postBook(data): Observable<any> {
    return this.http
      .post(apiUrl, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateBook(id: string, data) {
    const url = `${apiUrl}${id}`;
    return this.http.put(url, data)
  }

  deleteBook(id: string): Observable<{}> {
    const url = `${apiUrl}${id}`;
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // PostCustomer(cust: Customer) {
  //   return this.http.post(this.APIUrl, cust);
  // }

  // GetCustomerList() {
  //   return this.http.get(this.APIUrl);
  // }

  // GetCustomerById(id: string) {
  //   return this.http.get(this.APIUrl + `/${id}`);
  // }

  // PutCustomer(cust: Customer) {
  //   return this.http.put(this.APIUrl + `/${cust._id}`, cust);
  // }

  // DeleteCustomer(custid: string) {
  //   return this.http.delete(this.APIUrl + `/${custid}`);
  // }
}
