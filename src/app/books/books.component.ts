import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: any;
  // displayedColumns = ['isbn', 'title', 'author'];
  // dataSource = new BookDataSource(this.api);

  constructor(private api: BookService) {}

  ngOnInit() {
    this.api.getBooks().subscribe(
      (res) => {
        console.log(res);
        this.books = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

