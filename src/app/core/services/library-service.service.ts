import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  books: Book[] = [];

  constructor() { }


  add(detail) {
     console.log( this.CheckDuplicate(detail) );
      this.books.push(detail);
      console.log(this.books);
  }

  CheckDuplicate(book) {
    for (let i = 0; i < this.books.length; i++) {
      if (book.id === this.books[i].id) {
        return true;
      } else {
        return false;
      }
    }
  }

  remove(book) {
    this.books.splice(this.IndexOf(book), 1);
  }

  checkBook(book) {
    return this.IndexOf(book) !== -1;
  }

  AllBooks() {
    return this.books;
  }

  IndexOf(book) {
    for (let i = 0; i < this.books.length; i++) {
      if (book.id === this.books[i].id) {
        return i;
      }
    }
  }


}
