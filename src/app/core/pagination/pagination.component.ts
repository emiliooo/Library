import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BooksListComponent } from 'src/app/books-list/books-list.component';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input()
  private page = 1;


  @Input()
  private totalPage = 0;

  @Output()
  private changePage: EventEmitter<number> = new EventEmitter<number>();


  constructor(private bookListComponent: BooksListComponent) { }

  next() {
    this.changePage.emit(this.page + 1);
    this.bookListComponent.load();
  }

  prev() {
    this.changePage.emit(this.page - 1);
    this.bookListComponent.load();
  }


}
