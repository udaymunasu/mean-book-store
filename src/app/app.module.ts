import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddbookComponent,
    BookComponent,
    BooklostComponent,
    BooksComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    ManageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,MatTooltipModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
