import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../core/services/library-service.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];
  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit() {
    this.load();
  }

  load() {
   this.books = this.libraryService.AllBooks();
  }
}
