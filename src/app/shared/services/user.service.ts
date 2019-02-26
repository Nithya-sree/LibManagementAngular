import { Injectable }   from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse, HttpEvent, HttpHeaders }   from '@angular/common/http';
//import 'rxjs/add/operator/catch';
////import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';

import { Book } from '../../model/book.model';
import { User } from '../../model/user.model';
import { Login } from '../../model/login.model';
import { Isbn } from '../../model/isbn.model';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { makeParamDecorator } from '@angular/core/src/util/decorators';
import { LoginComponent } from 'src/app/login/login.component';

@Injectable()
export class UserService {

  private deleteUserURI = 'https://librarymanagement20190208054654.azurewebsites.net/api/user/DeleteUser';
  private usersURI = 'https://librarymanagement20190208054654.azurewebsites.net/api/user';
  
  private handleError;
  
  constructor(private http: HttpClient) { }

    getUsersDetails(): Observable<User[]> {
      return this.http.get<User[]>(this.usersURI).pipe(
        tap(data => console.log('All user list: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    login;
  deleteUser(user : User) : any
  {
    let getHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
  });
  this.login = {UserName : user.UserName};
  return this.http.request('DELETE',this.deleteUserURI,{
    body : this.login
  }).pipe(map(res => {
              return true;
                      }));
    }

    changePassword(login : Login)
    {
      let getHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.http.post('https://librarymanagement20190208054654.azurewebsites.net/api/Registration/ChangePassword',login, { headers: getHeaders })
    .pipe(map(res => {
    return true;
    }));
    }

}