import { Component, OnDestroy } from '@angular/core';
import { GoogleBookService } from '../core/services/google-book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent{

  constructor(private googleService: GoogleBookService) { }

  searchTxt: any;
  hide = false;
  books = localStorage.getItem('booklist') ? JSON.parse(localStorage.getItem('booklist')) : [];
 

  SearchedTxt(txt) {
    if (txt !== '') {
      this.searchTxt = txt;
      this.hide = true;
      this.load();
    } else {
      alert('its empty');
    }
  }

  load() {
    this.googleService.searchBooks(this.searchTxt)
      .subscribe(res => {
        this.books = res['items'];
      });

      setTimeout(() => {
        localStorage.setItem('booklist', JSON.stringify(this.books));
        this.books = JSON.parse(localStorage.getItem('booklist'));
      }, 1000);
  }

 

}
