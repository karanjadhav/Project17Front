import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  isbn: String;
  book: Book = new Book();
  constructor(private bookService: BookService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];

    this.bookService.getBookByIsbn(this.isbn).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
  }

}
