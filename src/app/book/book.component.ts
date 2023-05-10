import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { BookData } from '../services/global.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private api: BookService, private router: Router) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id: any) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log("this.book",data);
        this.book = data;
      });
  }

  deleteBook(id) {
    this.api.deleteBook(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
