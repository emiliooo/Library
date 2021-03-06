import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../core/services/library-service.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: any;

  constructor(private libraryService: LibraryServiceService) { }
  ngOnInit() {
    this.load();
    this.checkIfempty();
  }

  load() {
    this.books = this.libraryService.AllBooks();
  }

  checkIfempty() {
    if (this.books.length === 0) {
      document.getElementsByClassName('card-container')[0].innerHTML = 'MY LIBRARY ITS EMPTY';
    }
  }
}
