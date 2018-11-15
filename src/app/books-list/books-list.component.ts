import { Component, ViewChild } from '@angular/core';
import { GoogleBookService } from '../core/services/google-book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  constructor(private googleService: GoogleBookService) { }

  searchTxt: any;
  public books: any;
  hide = false;

  SearchedTxt(txt) {
    if (txt !== '') {
      this.searchTxt = txt;
      this.load();
      this.hide = true;
    } else {
      alert('its empty');
    }
  }

  load() {
    this.googleService.searchBooks(this.searchTxt)
      .subscribe(res => {
        this.books = res['items'];
        console.log(res['items']);
      });


}


}
