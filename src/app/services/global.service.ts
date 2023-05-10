import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}
}

export class BookData {
  _id: string;
  isbn: string;
  title: string;
  author: string;
  description: string;
  published_year: string;
  publisher: string;
  updated_date: string;
}
