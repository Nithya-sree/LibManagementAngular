import { Injectable }   from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpEvent, HttpHeaders }   from '@angular/common/http';
// import 'rxjs/add/operator/catch';
//// import 'rxjs/add/observable/throw';
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
  private getUsersURI = 'https://librarymanagement20190208054654.azurewebsites.net/api/user';
  private editUserURI = 'https://librarymanagement20190208054654.azurewebsites.net/api/user';
  private handleError;
  login;
  constructor(private http: HttpClient) { }

    getUsersDetails(): Observable<User[]> {
      return this.http.get<User[]>(this.getUsersURI).pipe(
        tap(data => console.log('All user list: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
  deleteUser(user: User): any {
    const getHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
  });
  this.login = {UserName : user.UserName};
  return this.http.request('DELETE', this.deleteUserURI, {
    body : this.login
  }).pipe(map(res => {
              return true;
                      }));
    }
    editUser(user: User, fileToUpload: File): any {
      const formData: FormData = new FormData();
      if (fileToUpload !== null) {
      formData.append('fileKey', fileToUpload, fileToUpload.name);
      }
      formData.append('model', JSON.stringify(user));
      console.log('edituser' + fileToUpload, fileToUpload.name, JSON.stringify(user));
      return this.http.post(this.editUserURI, formData).pipe(
        map((res: Response) => {
          if (res !== null) {
            return res;
          }
          return false;
      }));
    }
    changePassword(login: Login) {
const getHeaders = new HttpHeaders({
'Content-Type': 'application/json',
});
return this.http.post('https://librarymanagement20190208054654.azurewebsites.net/api/Registration/ChangePassword', login, { headers: getHeaders })
.pipe(map(res => {
return true;
}));
}

}
