import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.ChangeNavbar();
  }

  ChangeNavbar() {
    $('.navbar-nav a').on('click', function () {
      $('.navbar-nav').find('li.active').removeClass('active');
      $(this).parent('li').addClass('active');
    });
  }

}
