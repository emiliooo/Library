import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  books: Book[] = [];

  constructor() { }
  

  add(detail) {
    this.books.push(detail);
    console.log(this.books);
  }

}
