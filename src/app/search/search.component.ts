import { Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  writeText = 'css';
  @Output()
  searchTxt: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit() {
    this.SearchTxt();
  }

  constructor() { }

  SearchTxt() {
    this.searchTxt.emit(this.writeText);
  }


}
