import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleBookService } from '../core/services/google-book.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private googleService: GoogleBookService) { }
  @ViewChild('booksearchRef') booksearchRef: SearchComponent;

  searchTxt: string;
  public books: any;

 ngOnInit() {
    this.booksearchRef.searchTxt = this.searchTxt;
    console.log( this.searchTxt );
 }
 AfterViewInit() {
   this.load();
 }

 load() {
   this.googleService.searchBooks(this.searchTxt).subscribe(res => {
     this.books = res;
   });
 }

}
