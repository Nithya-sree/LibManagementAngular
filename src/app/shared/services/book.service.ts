import { Injectable }   from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse, HttpEvent }   from '@angular/common/http';
//import 'rxjs/add/operator/catch';
////import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';

import { Book } from '../../model/book.model';
import { Isbn } from '../../model/isbn.model';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { makeParamDecorator } from '@angular/core/src/util/decorators';

@Injectable()
export class BookService {

  private GetAllBooks = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/GetAllBooks';
  private booksURL = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books';
  ///private addBooksToExistingCategoryURL = 'https://librarymanagement20190208054654.azurewebsites.net/api/AddISBNDetails';
  private GetAllAvailableBooks = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/GetAllAvailableBooks';
  private serviceUrlForPost = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/AddNewCategoryBook';
  private addISBN = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/AddISBNDetails';
  
  private handleError;
  
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.GetAllBooks).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getAvailableBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.GetAllAvailableBooks).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

  deleteBook(book : Book) : any
  {
    let isbnBook = book.ISBNNumber[0];
    isbnBook.BookID = book.Id;
            return this.http.request('DELETE',this.booksURL,{
              body : isbnBook
            }) .pipe(map(res => {
              return true;
                      }));
    }
    postBook(book : Book, fileToUpload:File ) : any
    {
      const formData: FormData = new FormData();
      formData.append('fileKey', fileToUpload, fileToUpload.name);
      formData.append('model', JSON.stringify(book));
      return this.http.post(this.serviceUrlForPost,formData).pipe(
        map((res: Response) => {
          if (res !== null) {
            localStorage.setItem('addedBookDetails', JSON.stringify(res))
            return res
              
          }
          return false
      }));
    }
    isbnDetails;
    postExistingBook(isbnItem : any, Id : any) : any
    {
      this.isbnDetails = { BookID : Id,TrackNo : isbnItem.ISBNNumber[0].TrackNo, Edition : isbnItem.ISBNNumber[0].Edition,Created : "",Occupied:false,RequestForBlock:"" };
      return this.http.post(this.addISBN,this.isbnDetails).pipe(
        map((res: Response) => {
            localStorage.setItem('IsbnDetailsForExistingBook', JSON.stringify(isbnItem))
            return true
      }));
    }

}