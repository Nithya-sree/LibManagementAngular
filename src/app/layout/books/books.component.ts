import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {BookService} from '../../shared/services/book.service';
// import { Book } from '../../model/book.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from 'src/app/model/user.model';
import { Isbn } from 'src/app/model/isbn.model';
@Component({
    selector: 'app-tables',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    animations: [routerTransition()]
})
export class BooksComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  isbnDataSource: MatTableDataSource<any>;
  searchKey: string;
  // dataSource: string[] ;
   isbnDisplayColumns: string[];
  items;
  nameChecked: false;
  authorChecked: false;
  books: Isbn[] = [];
  booksJSON ;
  errorMessage: string;
  roleType: boolean;
  currentUser: User;
  result;
  checkval = false;
  showIsbn: boolean;
    constructor(private bookservice: BookService) {

    }

    ngOnInit() {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if (this.currentUser !== null) {
          this.roleType = this.currentUser.RoleType === 0 ? true : false;
          }
          if (!this.roleType) {
            this.isbnDisplayColumns = [ 'TrackNo', 'BookName', 'Author', 'Description', 'PublishingYear', 'edit', 'delete'];
          } else {
            this.isbnDisplayColumns = [ 'TrackNo', 'BookName', 'Author', 'Description', 'PublishingYear', 'Block'];
          }
        this.bookservice.GetAllISBNDetails().subscribe(
          booklist => {
            booklist.forEach(x => {
                this.books.push(x);

              });
              console.log('isbn details all' + JSON.stringify(this.books));
            this.dataSource = new MatTableDataSource(this.books);
            this.dataSource.paginator = this.paginator;
          },
          error => this.errorMessage = <any>error
        );
        }
        onSearchClear() {
            this.searchKey = '';
          }
          applyFilter(filterValue: string) {
            this.dataSource.filter = this.searchKey.trim().toLowerCase();
          }

        deleteBook(book: Isbn) {
          this.bookservice.deleteBook(book).subscribe(
            data => {
              if (data) {
                const i = this.books.findIndex(e => e.TrackNo === book.TrackNo);
              if (i !== -1) {
              this.books.splice(i, 1);
              this.dataSource = new MatTableDataSource(this.books);
              }}},
              error => {console.log(error); });
          }
          editBook(book: Isbn) {
            book.Description = 'check edit';
            this.bookservice.editBook(book).subscribe(
              data => {

              },
              error => {console.log(error); });
          }
          backToBook(book: Isbn) {
            this.showIsbn = false;
          }
}
