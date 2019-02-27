(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/components/BookList/booklist.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/BookList/booklist.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"search-div col-md-6\" class=\"form-group\" >\r\n    <!-- <button mat-raised-button (click)=\"CreateBook()\" *ngIf=\"!roleType\">\r\n      <mat-icon>add</mat-icon>create\r\n    </button> -->\r\n    <mat-form-field class=\"search-form-field\" style=\"widows: 28%;\" floatLabel=\"never\">\r\n      <input matInput [(ngModel)]=\"searchKey\" placeholder=\"search\" autocomplete=\"off\"  (keyup)=\"applyFilter($event.target.value)\">\r\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"onSearchClear()\" *ngIf=\"searchKey\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n   \r\n  </div>\r\n  \r\n\r\n\r\n  \r\n  \r\n  \r\n    <div class=\"mat-elevation-z8 tablediv\">  \r\n      <mat-table class=\"book-table-container\" [dataSource]=\"dataSource\" >\r\n          <ng-container matColumnDef=\"Image\">\r\n              <mat-header-cell *matHeaderCellDef  class=\"headerCell\">image</mat-header-cell> \r\n             <mat-cell *matCellDef=\"let element\"><img width=\"40px\" height=\"40px\" src={{element.Image}} alt=\"No image\"/></mat-cell>\r\n           </ng-container>\r\n        <ng-container matColumnDef=\"Name\">\r\n           <mat-header-cell *matHeaderCellDef  class=\"headerCell\">Name</mat-header-cell> \r\n          <mat-cell *matCellDef=\"let element\">{{element.Name}}</mat-cell>\r\n        </ng-container>\r\n          <ng-container matColumnDef=\"AvailableCopies\">\r\n               <mat-header-cell *matHeaderCellDef class=\"headerCell\">Description</mat-header-cell> \r\n              <mat-cell *matCellDef=\"let element\">{{element.AvailableCopies}}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"NumberOfCopies\">\r\n                 <mat-header-cell *matHeaderCellDef class=\"headerCell\">Available</mat-header-cell> \r\n                <mat-cell *matCellDef=\"let element\">{{element.NumberOfCopies}}</mat-cell>\r\n              </ng-container>\r\n              <!-- <ng-container matColumnDef=\"edit\">\r\n                  <mat-header-cell  *matHeaderCellDef class=\"headerCell\"> edit </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\" >\r\n                    <mat-icon color=\"warn\" (click)=\"editBook(element)\">edit</mat-icon>\r\n                  </mat-cell>\r\n              </ng-container> \r\n              <ng-container matColumnDef=\"actions\">\r\n                <mat-header-cell  *matHeaderCellDef class=\"headerCell\"> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                  <mat-icon color=\"warn\" (click)=\"deleteBook(element)\">delete</mat-icon>\r\n                </mat-cell>\r\n            </ng-container>  -->\r\n              <ng-container matColumnDef=\"loading\">\r\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                  Loading data...\r\n                </mat-footer-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"nodata\">\r\n                  <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                    No data...\r\n                  </mat-footer-cell>\r\n                </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"headerCell\">\r\n    </mat-header-row>\r\n    <mat-row class=\"mat-row-id\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':dataSource!=null}\"></mat-footer-row>\r\n    <mat-footer-row *matFooterRowDef=\"['nodata']\" [ngClass]=\"{'hide':!(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\r\n      </mat-table>\r\n    </div>\r\n    <div class=\"col-md-6\" class=\"form-group \">\r\n      <mat-paginator [length]=\"100\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons>\r\n  </mat-paginator>\r\n  </div>\r\n  \r\n  \r\n    \r\n  "

/***/ }),

/***/ "./src/app/layout/dashboard/components/BookList/booklist.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/BookList/booklist.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 100px;\n  width: 100px; }\n\n.div1 {\n  display: inline-block; }\n\nul {\n  list-style: none; }\n\ntable {\n  width: 100%; }\n\n.hide {\n  display: none; }\n\n.tablediv {\n  background: gray; }\n\nmat-footer-row mat-footer-cell {\n  justify-content: center;\n  font-style: italic; }\n\n#wrapper {\n  display: table; }\n\n.search-div {\n  margin: 5px;\n  display: table-row; }\n\n.search-form-field {\n  width: 350px;\n  margin-left: 10px;\n  padding: 5px 10px;\n  /* background-color : #f5f5f5;  */\n  border-radius: 5px; }\n\n.search-form-field div.mat-form-field-underline {\n  display: none; }\n\n.search-form-field div.mat-form-field-infix {\n  border-top: 0px; }\n\n.search-form-field div.mat-form-field-wrapper {\n  border-bottom: 0px; }\n\n.search-form-field div.mat-form-field-suffix button {\n  height: 32px;\n  width: 32px; }\n\n.headerCell {\n  display: none; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.mat-row-id {\n  border-bottom-width: 1px;\n  border-width: 1px;\n  border-radius: 4px;\n  margin: 10px;\n  border-style: groove; }\n\n.book-table-container {\n  position: relative;\n  max-height: 300px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL0Jvb2tMaXN0L0Q6XFxMaWJyYXJ5QXBwX0FuZ3VsYXIvc3JjXFxhcHBcXGxheW91dFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxCb29rTGlzdFxcYm9va2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHFCQUFvQixFQUFBOztBQUd4QjtFQUNJLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVyxFQUFBOztBQUdiO0VBQ0ksYUFBYyxFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDRSxjQUFhLEVBQUE7O0FBRWQ7RUFDQyxXQUFZO0VBQ1osa0JBQWlCLEVBQUE7O0FBRWpCO0VBQ0EsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDaEIsaUNBQUE7RUFDRCxrQkFBa0IsRUFBQTs7QUFFbEI7RUFDQSxhQUFjLEVBQUE7O0FBRWQ7RUFDQSxlQUFlLEVBQUE7O0FBRWY7RUFDQSxrQkFBa0IsRUFBQTs7QUFFbEI7RUFDQSxZQUFhO0VBQ2IsV0FBWSxFQUFBOztBQUdaO0VBQ0ksYUFBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx3QkFBeUI7RUFDekIsaUJBQWtCO0VBQ2xCLGtCQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvQm9va0xpc3QvYm9va2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59ICBcclxuXHJcbi5kaXYxe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5oaWRle1xyXG4gICAgICBkaXNwbGF5IDogbm9uZTtcclxuICB9XHJcbiAgLnRhYmxlZGl2e1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICB9XHJcbiAgbWF0LWZvb3Rlci1yb3cgbWF0LWZvb3Rlci1jZWxse1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICAjd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gIH1cclxuICAgLnNlYXJjaC1kaXZ7XHJcbiAgICBtYXJnaW4gOiA1cHg7XHJcbiAgICBkaXNwbGF5OnRhYmxlLXJvdztcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgLyogYmFja2dyb3VuZC1jb2xvciA6ICNmNWY1ZjU7ICAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XHJcbiAgICBkaXNwbGF5IDogbm9uZTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCBidXR0b257XHJcbiAgICBoZWlnaHQgOiAzMnB4O1xyXG4gICAgd2lkdGggOiAzMnB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAuaGVhZGVyQ2VsbHtcclxuICAgICAgICBkaXNwbGF5IDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZXhhbXBsZS1tYXJnaW4ge1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXJvdy1pZHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoIDogMXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aCA6IDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgICAgfVxyXG4gICAgICAuYm9vay10YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgfVxyXG4gICAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/BookList/booklist.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/BookList/booklist.component.ts ***!
  \****************************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/book.service */ "./src/app/shared/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/authenticationService */ "./src/app/shared/services/authenticationService.ts");
/* harmony import */ var _shared_services_configurationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/configurationService */ "./src/app/shared/services/configurationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { CreatebookdataComponent } from './../createbookdata/createbookdata.component';


// import {ConfirmationDialogService} from '../services/conformation-dialog.service'
var BookListComponent = /** @class */ (function () {
    // ,private confirmationDialogService: ConfirmationDialogService
    function BookListComponent(config, bookservice, router, dialog, authService, configService) {
        this.config = config;
        this.bookservice = bookservice;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.configService = configService;
        this.books = [];
        this.checkval = false;
        config.interval = 100000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.getConfigDetails().subscribe(function (details) {
            _this.result = details;
            localStorage.setItem('configValues', JSON.stringify(details));
        }, function (error) {
            console.error('getConfigDetails' + error);
            _this.errorMessage = error;
        });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== null) {
            this.roleType = this.currentUser.RoleType === 0 ? true : false;
        }
        this.displayedColumns = ['Image', 'Name', 'AvailableCopies', 'NumberOfCopies'];
        this.bookservice.getAvailableBooks().subscribe(function (booklist) {
            booklist.forEach(function (x) {
                _this.books.push(x);
            });
            console.log(JSON.stringify(_this.books));
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.books);
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    BookListComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        //// this.applyFilter();
    };
    BookListComponent.prototype.applyFilter = function (filterValue) {
        //// this.dataSource.filter = filterValue;
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
        //// this.books.find(x=>x.ISBNNumber.forEach(y=>y.))
    };
    BookListComponent.prototype.nameClick = function () {
        this.checkval = this.nameChecked;
    };
    BookListComponent.prototype.authorClick = function () {
    };
    BookListComponent.prototype.onChange = function () {
    };
    BookListComponent.prototype.deleteBook = function (book) {
        // this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?',book)
        // .then((confirmed) =>{
        // if(confirmed)
        // {
        //   this.bookservice.deleteBook(book).subscribe(
        //   data => {
        //     if(data){
        //       const i = this.books.findIndex(e=>e.Id===book.Id);
        //     if(i!== -1){
        //     this.books.splice(i,1);
        //     this.dataSource = new MatTableDataSource(this.books);
        //     }}})
        // }}
        //  )
        // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    };
    BookListComponent.prototype.editBook = function (book) {
    };
    BookListComponent.prototype.CreateBook = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '70%';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BookListComponent.prototype, "paginator", void 0);
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booklist',
            template: __webpack_require__(/*! ./booklist.component.html */ "./src/app/layout/dashboard/components/BookList/booklist.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./booklist.component.scss */ "./src/app/layout/dashboard/components/BookList/booklist.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"], _shared_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _shared_services_configurationService__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-comments fa-fw\"></i>\r\n        Chat\r\n        <div class=\" pull-right\" ngbDropdown>\r\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\r\n                <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\r\n                </li>\r\n                <li class=\"divider dropdown-divider\"></li>\r\n                <li role=\"menuitem\">\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                  <a href=\"#\" class=\"dropdown-item\">\r\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- /.panel-heading -->\r\n    <div class=\"card-body\">\r\n        <ul class=\"chat\">\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n        <div class=\"input-group\">\r\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                    Send\r\n                </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <!-- /.card-footer -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.chat-panel .chat .left img {\n    margin-right: 15px; }\n\n.chat-panel .chat .right img {\n    margin-left: 15px; }\n\n.chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvRDpcXExpYnJhcnlBcHBfQW5ndWxhci9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0IsRUFBQTs7QUFGeEI7RUFlUSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBbkJ4QjtJQU9nQixrQkFBa0IsRUFBQTs7QUFQbEM7SUFZZ0IsaUJBQWlCLEVBQUE7O0FBWmpDO0lBcUJZLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBOztBQXhCMUM7RUE2QlksWUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LXBhbmVse1xyXG4gICAgLmNoYXQtZHJvcGRvd257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgIH1cclxuICAgIC5jaGF0e1xyXG4gICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzk5OTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1mb290ZXJ7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/layout/dashboard/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/layout/dashboard/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]; });

/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]; });






/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\r\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\r\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\r\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\r\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\r\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\r\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\r\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\r\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\r\n        </a>\r\n    </div>\r\n    <!-- /.list-group -->\r\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/layout/dashboard/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <ul class=\"timeline\">\r\n        <li>\r\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\r\n                    </p>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\r\n                    <hr>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li><a href=\"#\">Action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Another action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Something else here</a>\r\n                            </li>\r\n                            <li class=\"divider\"></li>\r\n                            <li><a href=\"#\">Separated link</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL0Q6XFxMaWJyYXJ5QXBwX0FuZ3VsYXIvc3JjXFxhcHBcXGxheW91dFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFx0aW1lbGluZVxcdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCOztFQUVJLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVyxFQUFBOztBQUdmOztFQUVJLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFFbEIsMENBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdsQjs7RUFFSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFHZDtJQUNJLHdCQUF3QjtJQUV4QixnQ0FBZ0MsRUFBQTtFQUdwQztJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYyxFQUFBO0VBR2xCO0lBQ0ksWUFBWSxFQUFBO0VBR2hCO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsb0JBQW9CLEVBQUE7RUFHeEI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixvQkFBb0IsRUFBQSxFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi50aW1lbGluZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcclxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcclxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQ2JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLDAsMCwwLjE3NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLDAsMCwwLjE3NSk7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjZweDtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2NjYztcclxuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjdweDtcclxuICAgIHJpZ2h0OiAtMTRweDtcclxuICAgIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTRweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAtMTVweDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IC0xNHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbn1cclxuXHJcbi50aW1lbGluZS1iYWRnZS5wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTZkYTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJhZGdlLnN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmOTAzZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2Uud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1iYWRnZS5kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2UuaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ib2R5ID4gcCxcclxuLnRpbWVsaW5lLWJvZHkgPiB1bCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgdWwudGltZWxpbmU6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICAgICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA5MHB4KTtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA5MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcclxuICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIH1cclxuXHJcbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICBsZWZ0OiAtMTRweDtcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/layout/dashboard/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/layout/dashboard/components/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"mat-elevation-z8 bookdiv\" >  \r\n      <mat-table class=\"book-table-container\" [dataSource]=\"dataSource\" >\r\n        <ng-container matColumnDef=\"Name\">\r\n           <mat-header-cell *matHeaderCellDef  class=\"headerCell\">Name</mat-header-cell> \r\n          <mat-cell *matCellDef=\"let element\">{{element.Name}}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Author\">\r\n             <mat-header-cell *matHeaderCellDef class=\"headerCell\">Author</mat-header-cell> \r\n            <mat-cell *matCellDef=\"let element\">{{element.Author}}</mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"Edition\">\r\n               <mat-header-cell *matHeaderCellDef class=\"headerCell\">Edition</mat-header-cell> \r\n              <mat-cell *matCellDef=\"let element\">{{element.Edition}}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"ISBNNumber\">\r\n                 <mat-header-cell *matHeaderCellDef class=\"headerCell\">ISBNNumber</mat-header-cell> \r\n                <mat-cell *matCellDef=\"let element\">{{element.ISBNNumber}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"ReturnDate\">\r\n                <mat-header-cell *matHeaderCellDef class=\"headerCell\">ReturnDate</mat-header-cell> \r\n               <mat-cell *matCellDef=\"let element\">{{element.ReturnDate}}</mat-cell>\r\n             </ng-container>\r\n             <ng-container matColumnDef=\"IssuedOn\">\r\n                <mat-header-cell *matHeaderCellDef class=\"headerCell\">IssuedOn</mat-header-cell> \r\n               <mat-cell *matCellDef=\"let element\">{{element.IssuedOn}}</mat-cell>\r\n             </ng-container>\r\n              <ng-container matColumnDef=\"loading\">\r\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                  Loading data...\r\n                </mat-footer-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"nodata\">\r\n                  <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                    No data...\r\n                  </mat-footer-cell>\r\n                </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"booksDisplayColumns\" class=\"headerCell\">\r\n    </mat-header-row>\r\n    <mat-row class=\"mat-row-id\" *matRowDef=\"let row; columns: booksDisplayColumns;\"></mat-row>\r\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':dataSource!=null}\"></mat-footer-row>\r\n    <mat-footer-row *matFooterRowDef=\"['nodata']\" [ngClass]=\"{'hide':!(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\r\n      </mat-table>\r\n    </div> \r\n    <div>\r\n        <mat-paginator [length]=\"100\"\r\n        [pageSize]=\"10\"\r\n        [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons>\r\n    </mat-paginator>\r\n    </div>\r\n  "

/***/ }),

/***/ "./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none; }\n\n.bookdiv {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3VzZXJJc3N1ZWRCb29rTGlzdC9EOlxcTGlicmFyeUFwcF9Bbmd1bGFyL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcdXNlcklzc3VlZEJvb2tMaXN0XFxpc3N1ZWRCb29rTGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWMsRUFBQTs7QUFFbEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy91c2VySXNzdWVkQm9va0xpc3QvaXNzdWVkQm9va0xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICAgIGRpc3BsYXkgOiBub25lO1xyXG59XHJcbi5ib29rZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IssuedBookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuedBookListComponent", function() { return IssuedBookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/book.service */ "./src/app/shared/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssuedBookListComponent = /** @class */ (function () {
    function IssuedBookListComponent(bookservice) {
        this.bookservice = bookservice;
        this.issuedbooks = [];
    }
    IssuedBookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
            this.roleType = currentUser.RoleType === 0 ? true : false;
            this.UserName = currentUser.UserName;
        }
        this.booksDisplayColumns = ['Name', 'Author', 'Edition', 'ISBNNumber', 'ReturnDate', 'IssuedOn'];
        this.bookservice.GetIssuedBooks(currentUser).subscribe(function (booklist) {
            booklist.forEach(function (x) {
                _this.issuedbooks.push(x);
            });
            console.log('issuedbook details' + JSON.stringify(_this.issuedbooks));
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.issuedbooks);
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.error('error' + error);
            _this.errorMessage = error;
        });
    };
    IssuedBookListComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
    };
    IssuedBookListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], IssuedBookListComponent.prototype, "paginator", void 0);
    IssuedBookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issuedbooklist',
            template: __webpack_require__(/*! ./issuedBookList.component.html */ "./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.html"),
            styles: [__webpack_require__(/*! ./issuedBookList.component.scss */ "./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], IssuedBookListComponent);
    return IssuedBookListComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <h2 class=\"text-muted\">Dashboard <small>Statistics Overview</small></h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <ngb-carousel>\r\n                <ng-template ngbSlide *ngFor=\"let slider of sliders\">\r\n                    <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\r\n                    <div class=\"carousel-caption\">\r\n                        <h3>{{slider.label}}</h3>\r\n                        <p>{{slider.text}}</p>\r\n                    </div>\r\n                </ng-template>\r\n            </ngb-carousel>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-comments'\" [count]=\"26\" [label]=\"'New Comments!'\" ></app-stat>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat [bgClass]=\"'warning'\" [icon]=\"'fa-tasks'\" [count]=\"12\" [label]=\"'New task!'\" ></app-stat>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat [bgClass]=\"'success'\" [icon]=\"'fa-shopping-cart'\" [count]=\"124\" [label]=\"'New Orders!'\" ></app-stat>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-support'\" [count]=\"13\" [label]=\"'New Tickets!'\"></app-stat>\r\n        </div>\r\n    </div>\r\n    <!-- <hr />\r\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\r\n    <hr /> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n        <app-booklist></app-booklist>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"roleType\">\r\n        <div class=\"col-md-12\">\r\n            <app-issuedbooklist></app-issuedbooklist>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
            this.roleType = currentUser.RoleType === 0 ? true : false;
            this.UserName = currentUser.UserName;
        }
    };
    DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components_BookList_booklist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BookList/booklist.component */ "./src/app/layout/dashboard/components/BookList/booklist.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/book.service */ "./src/app/shared/services/book.service.ts");
/* harmony import */ var src_app_shared_services_configurationService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/configurationService */ "./src/app/shared/services/configurationService.ts");
/* harmony import */ var src_app_shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/authenticationService */ "./src/app/shared/services/authenticationService.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _components_userIssuedBookList_issuedBookList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/userIssuedBookList/issuedBookList.component */ "./src/app/layout/dashboard/components/userIssuedBookList/issuedBookList.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], _components_BookList_booklist_component__WEBPACK_IMPORTED_MODULE_7__["BookListComponent"], _components_userIssuedBookList_issuedBookList_component__WEBPACK_IMPORTED_MODULE_14__["IssuedBookListComponent"]
            ],
            providers: [src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_10__["BookService"], src_app_shared_services_configurationService__WEBPACK_IMPORTED_MODULE_11__["ConfigurationService"], src_app_shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/shared/services/configurationService.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/configurationService.ts ***!
  \*********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
        this.serviceUrl = 'https://librarymanagement20190208054654.azurewebsites.net/api/config';
    }
    ConfigurationService.prototype.getConfigDetails = function () {
        return this.http.get(this.serviceUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            console.log('All: ' + JSON.stringify(data));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map