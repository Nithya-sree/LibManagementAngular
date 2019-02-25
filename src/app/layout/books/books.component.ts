import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    animations: [routerTransition()]
})
export class BooksComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
