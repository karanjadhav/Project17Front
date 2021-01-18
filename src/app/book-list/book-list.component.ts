import { Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService,
    private Router: Router) { }
  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks() {
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
    });
  }

  updateBook(isbn: String) {
    this.Router.navigate(['update-book', isbn]);
  }
}
