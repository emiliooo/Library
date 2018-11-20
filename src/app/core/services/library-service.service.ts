import { Injectable, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService implements OnInit {

  books: Book[] = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

  constructor() { }

  ngOnInit() {
  }

  add(detail) {
    this.books.push(detail);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  CheckDuplicate(book) {
    for (let i = 0; i < this.books.length; i++) {
      console.log(i);
      console.log(this.books.length);
      if (this.books[i].id === book.id) {
        return ' taka sama';
      } else {
        return 'brak takich samych';
      }
    }
  }

  remove(book) {
    this.books.splice(this.IndexOf(book), 1);
    localStorage.setItem('books', JSON.stringify(this.books));
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
