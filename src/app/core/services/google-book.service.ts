import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';


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
  public books: Book[];
  public query = '';

  constructor(private httpClient: HttpClient) { }

  get startIndex() {
    return this._page * this.pageSize;
  }

  get TotalPages() {
    try {
      return Math.ceil(this.totalItems / this.pageSize);
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  get page(): number {
    return this._page;
  }

  set page(val: number) {
    console.log(this.query);
    if (val !== this.page) {
      this._page = val;
      this.searchBooks(this.query);
    }
  }

  searchBooks(queryTitle: string): Observable<any> {
    if (this.query !== queryTitle) {
      this._page = 1;
    }

    this.query = queryTitle;
    return this.httpClient.get(`${this.api_path}?q=${this.query}&maxResults=${this.pageSize}&startIndex=${this.startIndex}`);
  }

  retrieveBook(bookId: string) {
    return this.httpClient.get(`${this.api_path}/${bookId}`);
  }




}
