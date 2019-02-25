import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-changePassword',
    templateUrl: './changePassword.component.html',
    styleUrls: ['./changePassword.component.scss'],
    animations: [routerTransition()]
})
export class ChangePasswordComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}