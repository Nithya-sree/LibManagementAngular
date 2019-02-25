import { IssueBooks } from "./issueBooks";

export enum GenderType {
    male,
    female
}

export enum RoleType {
    student,
    admin
}

export interface User {
    UserName : string;
    FirstName : string;
    MiddleName: string;
    LastName: string;
    Email : string;
    DateOfBirth : string;
    Gender : GenderType;
    Created : string;
    IssuedBooks : IssueBooks[];
    LastUpdated : string;
    RoleType : RoleType;
    UserID : string;
    Password : string;
    PhoneNumber : string;
    Image : string;
    ////RegistrationNumber : string;
}