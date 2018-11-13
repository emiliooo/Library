import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookService {
  private api_path = 'https://www.googleapis.com/books/v1/volumes';
  public loading = false;
  public totalItems = 0;
  // public books: Book[];
  public pageSize = 10;
  public _page = 1;


  constructor(private httpClient: HttpClient) { }

  get startIndex() {
    return this._page * this.pageSize;
  }

  searchBooks(queryTitle: string): Observable<any> {

    return this.httpClient.get(`${this.api_path}?q=${queryTitle}&maxResults=${this.pageSize}&startIndex=${this.startIndex}`);

  }



}
