import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Isbn } from 'src/app/model/isbn.model';
import { UserService } from 'src/app/shared/services/user.service';
import { BookService } from 'src/app/shared/services/book.service';
import { BlockBooks } from 'src/app/model/blockBooks';

@Component({
    selector: 'app-returnbooklist',
    templateUrl: './returnBookList.component.html',
    styleUrls: ['./returnBookList.component.scss'],
    animations: [routerTransition()]
})
export class ReturnBookListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource: MatTableDataSource<any>;
    searchKey: string;
    isbnDisplayColumns: string[];
    books: BlockBooks[] = [];
      constructor(private userService: UserService, private bookService: BookService) {}

      ngOnInit() {
          this.isbnDisplayColumns = [ 'Name', 'Author', 'Edition', 'ISBNNumber', 'ReturnDate', 'IssuedOn'];
          this.bookService.GetAllBlockedBooks().subscribe(
              booklist => {
                booklist.forEach(x => {
                    this.books.push(x);
                  });
                  console.log('isbn details all' + JSON.stringify(this.books));
                this.dataSource = new MatTableDataSource(this.books);
                this.dataSource.paginator = this.paginator;
              },
              error => {
                 console.log('GetAllIssuedBooks' + error);
              }
            );
      }
}
