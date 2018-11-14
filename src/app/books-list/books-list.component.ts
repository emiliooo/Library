import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleBookService } from '../core/services/google-book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, AfterViewInit {

  constructor(private googleService: GoogleBookService ) { }

  searchTxt: any;
  public books: any;

  ngOnInit() {

  }

  ngAfterViewInit() {
   // console.log(this.books);
  }

  SearchedTxt(txt) {
      this.searchTxt = txt;
      this.load();
  }

  load() {
        this.googleService.searchBooks(this.searchTxt)
        .subscribe(res => {
          this.books = res['items'];
          console.log( res['items']);
        });
   }
}
