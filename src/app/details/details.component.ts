import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../core/services/google-book.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loadBook();
  }

  loadBook() {
    const id = this.route.snapshot.params['id'];
    this.googleService.retrieveBook(id)
      .subscribe(res => {
        this.book = res;
        console.log(res);
        }
      );
  }

  addBook(book: Book) {
    this.libraryService.add(book);
    this.router.navigate(['/booklist']);
  }

  removeBook(book) {
    this.libraryService.remove(book);
    this.loadBook();
    this.router.navigate(['/mylibrary']);
  }

  checkBook(book) {
   return this.libraryService.checkBook(book);
  }



}
