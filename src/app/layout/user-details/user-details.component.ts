import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatPaginator,MatTableDataSource,MatSort,MatSortable,MatDialog,MatDialogConfig} from '@angular/material';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-userDetails',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
    animations: [routerTransition()]
})
export class UserDetailsComponent implements OnInit {
    @ViewChild(MatPaginator) paginator : MatPaginator;
    dataSource : MatTableDataSource<any>;
    searchKey : string;
    displayedColumns: string[] ;
    users : User[] = [];
    errorMessage : string;
    constructor(private userservice : UserService, private router :
        Router,private dialog:MatDialog)
{}
    ngOnInit() {
        this.displayedColumns = [ 'UserName','Email','DateOfBirth', 'UserID', 'PhoneNumber','delete'];
        this.userservice.getUsersDetails().subscribe(
            userlist => {
                userlist.forEach(x=>
                {
                  this.users.push(x);
                });
                console.log(JSON.stringify(this.users));
              this.dataSource = new MatTableDataSource(this.users);
              
              this.dataSource.paginator = this.paginator;
            },
            error => this.errorMessage = <any>error
          );
    }

    onSearchClear(){
        this.searchKey = "";
        this.applyFilter();
      }
    
      applyFilter(){
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
       
      }

      deleteBook(user : User)
      {
        this.userservice.deleteUser(user).subscribe(
            data => {
              if(data){
                const i = this.users.findIndex(e=>e.UserName===user.UserName);
              if(i!== -1){
              this.users.splice(i,1);
              this.dataSource = new MatTableDataSource(this.users);
              }}},
              error=>{console.log(error)})
      }
}
