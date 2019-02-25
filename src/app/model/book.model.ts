import {Isbn} from "./isbn.model";
import {NotificationDetails} from "./notificationDetails.Model";
import { BlockBooks } from "./blockBooks";
export class Book {
    
    Author : string;
    AvailableCopies : number;
    BlockedCopies : number;
    Created :  string;
    ISBNNumber : Isbn[];
    Id : string;
    Image : string;
    LastUpdated	: string;
    Name : string;
    Notification : NotificationDetails[];
    NumberOfCopies : number;
    PublishingYear : string;
    BookID: string;
    arr : string;
    blockBooks : BlockBooks[];
    // private _ISBNNumber: Isbn[];

    // get ISBNNumber(): Isbn[] {
    //     return this._ISBNNumber;
    // }

    // set ISBNNumber(newName: Isbn[]) {
    //     this._ISBNNumber = newName;
    //     this.arr = "";
    //     newName.forEach(x=>this.arr+=x.TrackNo);
    // }
////notification : [{ "email" : , "userID" : }],
}