import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    host: {'window:beforeunload': 'doSomething'}
})
export class AppComponent implements OnInit {

    @HostListener('window:onunload ', ['$event'])

    doSomething($event: any) {

        localStorage.clear();
        console.log($event);
    }
    constructor() {
    }

    ngOnInit() {
    }
}
