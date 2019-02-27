(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["issuingBooksList-issuingBooksList-module"],{

/***/ "./src/app/layout/issuingBooksList/issuingBooksList-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/issuingBooksList/issuingBooksList-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: IssuingBooksListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuingBooksListRoutingModule", function() { return IssuingBooksListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issuingBooksList_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issuingBooksList.component */ "./src/app/layout/issuingBooksList/issuingBooksList.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _issuingBooksList_component__WEBPACK_IMPORTED_MODULE_2__["IssuingBooksListComponent"]
    }
];
var IssuingBooksListRoutingModule = /** @class */ (function () {
    function IssuingBooksListRoutingModule() {
    }
    IssuingBooksListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IssuingBooksListRoutingModule);
    return IssuingBooksListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/issuingBooksList/issuingBooksList.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/issuingBooksList/issuingBooksList.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 \" >  \r\n    <mat-table class=\"book-table-container\" [dataSource]=\"dataSource\" >\r\n        <ng-container matColumnDef=\"BookName\">\r\n            <mat-header-cell *matHeaderCellDef  class=\"headerCell\">Book Name</mat-header-cell> \r\n           <mat-cell *matCellDef=\"let element\">{{element.BookName}}</mat-cell>\r\n         </ng-container>\r\n      <ng-container matColumnDef=\"UserName\">\r\n         <mat-header-cell *matHeaderCellDef  class=\"headerCell\">User Name</mat-header-cell> \r\n        <mat-cell *matCellDef=\"let element\">{{element.UserName}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Author\">\r\n           <mat-header-cell *matHeaderCellDef class=\"headerCell\">Author</mat-header-cell> \r\n          <mat-cell *matCellDef=\"let element\">{{element.Author}}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Edition\">\r\n             <mat-header-cell *matHeaderCellDef class=\"headerCell\">Edition</mat-header-cell> \r\n            <mat-cell *matCellDef=\"let element\">{{element.Edition}}</mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"ISBNNumber\">\r\n               <mat-header-cell *matHeaderCellDef class=\"headerCell\">ISBNNumber</mat-header-cell> \r\n              <mat-cell *matCellDef=\"let element\">{{element.ISBNNumber}}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"ReturnDate\">\r\n              <mat-header-cell *matHeaderCellDef class=\"headerCell\">ReturnDate</mat-header-cell> \r\n             <mat-cell *matCellDef=\"let element\">{{element.ReturnDate}}</mat-cell>\r\n           </ng-container> \r\n           <ng-container matColumnDef=\"IssuedOn\">\r\n            <mat-header-cell *matHeaderCellDef class=\"headerCell\">IssuedOn</mat-header-cell> \r\n           <mat-cell *matCellDef=\"let element\">{{element.IssuedOn}}</mat-cell>\r\n         </ng-container> \r\n            <ng-container matColumnDef=\"issue\">\r\n              <mat-header-cell  *matHeaderCellDef class=\"headerCell\"> Issue </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\" >\r\n                <mat-icon color=\"warn\" (click)=\"issueBook(element)\">delete</mat-icon>\r\n              </mat-cell>\r\n          </ng-container>\r\n            <ng-container matColumnDef=\"loading\">\r\n              <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                Loading data...\r\n              </mat-footer-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"nodata\">\r\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                  No data...\r\n                </mat-footer-cell>\r\n              </ng-container>\r\n  <mat-header-row *matHeaderRowDef=\"isbnDisplayColumns\" class=\"headerCell\">\r\n  </mat-header-row>\r\n  <mat-row class=\"mat-row-id\" *matRowDef=\"let row; columns: isbnDisplayColumns;\"></mat-row>\r\n  <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':dataSource!=null}\"></mat-footer-row>\r\n  <mat-footer-row *matFooterRowDef=\"['nodata']\" [ngClass]=\"{'hide':!(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\r\n    </mat-table>\r\n  </div> "

/***/ }),

/***/ "./src/app/layout/issuingBooksList/issuingBooksList.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/issuingBooksList/issuingBooksList.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2lzc3VpbmdCb29rc0xpc3QvRDpcXExpYnJhcnlBcHBfQW5ndWxhci9zcmNcXGFwcFxcbGF5b3V0XFxpc3N1aW5nQm9va3NMaXN0XFxpc3N1aW5nQm9va3NMaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2lzc3VpbmdCb29rc0xpc3QvaXNzdWluZ0Jvb2tzTGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRle1xyXG4gICAgZGlzcGxheSA6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/issuingBooksList/issuingBooksList.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/issuingBooksList/issuingBooksList.component.ts ***!
  \***********************************************************************/
/*! exports provided: IssuingBooksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuingBooksListComponent", function() { return IssuingBooksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/book.service */ "./src/app/shared/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IssuingBooksListComponent = /** @class */ (function () {
    function IssuingBooksListComponent(userService, bookService) {
        this.userService = userService;
        this.bookService = bookService;
        this.books = [];
    }
    IssuingBooksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isbnDisplayColumns = ['BookName', 'UserName', 'Author', 'Edition', 'ISBNNumber', 'ReturnDate', 'IssuedOn', 'issue'];
        this.bookService.GetAllBlockedBooks().subscribe(function (booklist) {
            booklist.forEach(function (x) {
                _this.books.push(x);
            });
            console.log('isbn details all' + JSON.stringify(_this.books));
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.books);
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log('GetAllBlockedBooks' + error);
        });
    };
    IssuingBooksListComponent.prototype.issueBook = function (issuedBook) {
        var _this = this;
        if (window.confirm('do u want to issue?')) {
            this.userService.issueBook(issuedBook).subscribe(function (data) {
                if (data) {
                    var i = _this.books.findIndex(function (e) { return e.ISBNNumber === issuedBook.ISBNNumber; });
                    if (i !== -1) {
                        _this.books.splice(i, 1);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.books);
                    }
                }
            }, function (error) {
                console.log('GetAllBlockedBooks' + error);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], IssuingBooksListComponent.prototype, "paginator", void 0);
    IssuingBooksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issuingbookslist',
            template: __webpack_require__(/*! ./issuingBooksList.component.html */ "./src/app/layout/issuingBooksList/issuingBooksList.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./issuingBooksList.component.scss */ "./src/app/layout/issuingBooksList/issuingBooksList.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]])
    ], IssuingBooksListComponent);
    return IssuingBooksListComponent;
}());



/***/ }),

/***/ "./src/app/layout/issuingBooksList/issuingBooksList.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/issuingBooksList/issuingBooksList.module.ts ***!
  \********************************************************************/
/*! exports provided: IssuingBooksListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuingBooksListModule", function() { return IssuingBooksListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _issuingBooksList_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issuingBooksList-routing.module */ "./src/app/layout/issuingBooksList/issuingBooksList-routing.module.ts");
/* harmony import */ var _issuingBooksList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issuingBooksList.component */ "./src/app/layout/issuingBooksList/issuingBooksList.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/book.service */ "./src/app/shared/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var IssuingBooksListModule = /** @class */ (function () {
    function IssuingBooksListModule() {
    }
    IssuingBooksListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _issuingBooksList_routing_module__WEBPACK_IMPORTED_MODULE_2__["IssuingBooksListRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],],
            declarations: [_issuingBooksList_component__WEBPACK_IMPORTED_MODULE_3__["IssuingBooksListComponent"]],
            providers: [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_9__["BookService"]]
        })
    ], IssuingBooksListModule);
    return IssuingBooksListModule;
}());



/***/ })

}]);
//# sourceMappingURL=issuingBooksList-issuingBooksList-module.js.map