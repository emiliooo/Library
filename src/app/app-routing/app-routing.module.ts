import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from '../books-list/books-list.component';
import { DetailsComponent } from '../details/details.component';



const routes: Routes = [
  { path: '', redirectTo: 'booklist', pathMatch: 'full' },
  { path: 'booklist', component: BooksListComponent },
  { path: 'booklist/:id', component: DetailsComponent }
  //{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }