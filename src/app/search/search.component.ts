import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../core/services/google-book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchTxt: string;

  constructor() { }



  ngOnInit() {

  }


}
