import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchComponent } from './search/search.component';
import { BooksListComponent } from './books-list/books-list.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    HeaderComponent,
    SearchComponent,
    BooksListComponent,
    PaginationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
