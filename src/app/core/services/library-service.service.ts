import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  books: {};

  constructor() { }
  


  add(detail) {
   this.books += detail;
    console.log(this.books);
  }

}
