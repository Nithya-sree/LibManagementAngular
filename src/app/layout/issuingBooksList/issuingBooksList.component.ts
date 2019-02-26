import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-issuingbookslist',
    templateUrl: './issuingBooksList.component.html',
    styleUrls: ['./issuingBooksList.component.scss'],
    animations: [routerTransition()]
})
export class IssuingBooksListComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
