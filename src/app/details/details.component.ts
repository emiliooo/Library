import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../core/services/google-book.service';
import { ActivatedRoute } from '@angular/router';
import { LibraryServiceService } from '../core/services/library-service.service';
import { Book } from '../shared/book';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book: any;

  constructor(private googleService: GoogleBookService,
    private libraryService: LibraryServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadBook();
  }

  loadBook() {
    const id = this.route.snapshot.params['id'];
    this.googleService.retrieveBook(id)
      .subscribe(res => {
        this.book = res;
      }
      );
  }

  addBook(book: Book) {
    if (book) {
      return this.libraryService.add(book);
    }

  }


}
