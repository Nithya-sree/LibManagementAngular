import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-profiledetails',
    templateUrl: './profileDetails.component.html',
    styleUrls: ['./profileDetails.component.scss'],
    animations: [routerTransition()]
})
export class ProfileDetailsComponent implements OnInit {
    fileToUpload: File = null;
    imageUrl: string;
    userDetails: FormGroup;
    url: any;
    isImageUploaded = false;
    constructor(private userService: UserService , private formBuilder: FormBuilder) {}

    ngOnInit() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
        this.userDetails = this.formBuilder.group(
            {
              UserName: [currentUser.UserName , Validators.required],
              FirstName: [currentUser.FirstName, Validators.required],
              MiddleName: [currentUser.MiddleName, Validators.required],
              LastName: [currentUser.LastName , Validators.required],
              Email: [currentUser.Email, Validators.required],
              DateOfBirth: [currentUser.DateOfBirth, Validators.required],
              Gender: [currentUser.Gender, Validators.required],
              RoleType: [currentUser.RoleType , Validators.required],
              PhoneNumber: [currentUser.PhoneNumber, Validators.required],
              Image: [currentUser.Image, Validators.required],
            }
          );
        }
    }

    // uploadImage(file: FileList) {
    //     this.fileToUpload = file.item(0);
    //     const reader = new FileReader();
    //     reader.onload = (event: any) => {
    //       this.imageUrl = event.target.result;
    //     };
    //     reader.readAsDataURL(this.fileToUpload);
    //   }
      UploadImage(event)
      {
        this.isImageUploaded=true;
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
        }
    
        reader.readAsDataURL(event.target.files[0]);
      }
        console.log(event);
      }
    editUserDetails() {

        this.userService.editUser(this.userDetails.value, this.fileToUpload).subscribe(
            data => {
              if (data) {
                console.log('add success');
              }},
              error  => {
              console.log('Error', error);
              });
    }

    InitializeUserDetails()
    {
      this.userDetails.setValue({
        FirstName:'',
        LastName:'',
        MiddleName:'',
        DateOfBirth:'',
        PhoneNumber:''
      })
      
    }
    onClose() {
      this.userDetails.reset();
      this.InitializeUserDetails();
    }
}
