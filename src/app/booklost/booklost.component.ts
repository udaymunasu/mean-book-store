import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-booklost',
  templateUrl: './booklost.component.html',
  styleUrls: ['./booklost.component.scss'],
})
export class BooklostComponent implements OnInit {
  bookForm: FormGroup;
  id: string = '';
  isbn: string = '';
  title: string = '';
  description: string = '';
  author: string = '';
  publisher: string = '';
  published_year: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: BookService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.bookForm = this.formBuilder.group({
      isbn: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      author: [null, Validators.required],
      publisher: [null, Validators.required],
      published_year: [null, Validators.required],
    });
  }

  getBook(id) {
    this.api.getBook(id).subscribe((data) => {
      this.id = data._id;
      this.bookForm.setValue({
        isbn: data.isbn,
        title: data.title,
        description: data.description,
        author: data.author,
        publisher: data.publisher,
        published_year: data.published_year,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateBook(this.id, form).subscribe(
      (res) => {
        let id = res['_id'];
        this.router.navigate(['/book-details', id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  bookDetails() {
    this.router.navigate(['/book-details', this.id]);
  }
}
