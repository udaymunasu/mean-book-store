import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookComponent } from './book/book.component';
import { BooklostComponent } from './booklost/booklost.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ManageComponent } from './manage/manage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: AddbookComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BooklostComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
