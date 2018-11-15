import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  writeText = '';

  @Output()
  searchTxt: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  SearchTxt() {
    this.searchTxt.emit(this.writeText);
  }


}
