import { UpdateBookComponent } from './update-book/update-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'update-book/:isbn', component: UpdateBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
