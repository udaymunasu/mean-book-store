import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddbookComponent implements OnInit {
  // customerDetail: Customer;

  bookForm: FormGroup;
  isbn: string = '';
  title: string = '';
  description: string = '';
  author: string = '';
  publisher: string = '';
  published_year: string = '';

  constructor(
    private router: Router,
    private api: BookService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      isbn: [],
      title: [],
      description: [],
      author: [],
      publisher: [],
      published_year: [],
    });
  }

  onFormSubmit(form: NgForm) {
    console.log("response", form)

    this.api.postBook(form).subscribe(
      (res) => {
       

        let id = res['_id'];
        this.router.navigate(['/book-details', id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
