(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-details-user-details-module"],{

/***/ "./src/app/layout/user-details/user-details-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/user-details/user-details-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: UserDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsRoutingModule", function() { return UserDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details.component */ "./src/app/layout/user-details/user-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"]
    }
];
var UserDetailsRoutingModule = /** @class */ (function () {
    function UserDetailsRoutingModule() {
    }
    UserDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserDetailsRoutingModule);
    return UserDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-details/user-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/user-details/user-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\r\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\r\n      <input matInput [(ngModel)]=\"searchKey\" placeholder=\"search\" autocomplete=\"off\"  (keyup)=\"applyFilter()\">\r\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"onSearchClear()\" *ngIf=\"searchKey\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n      <mat-paginator [length]=\"100\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons>\r\n  </mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  \r\n    <div class=\"mat-elevation-z8 \">  \r\n      <mat-table class=\"book-table-container\" [dataSource]=\"dataSource\" >\r\n          <ng-container matColumnDef=\"UserName\">\r\n              <mat-header-cell *matHeaderCellDef  class=\"headerCell\">User Name</mat-header-cell> \r\n             <mat-cell *matCellDef=\"let element\">{{element.UserName}}</mat-cell>\r\n           </ng-container>\r\n        <ng-container matColumnDef=\"Email\">\r\n           <mat-header-cell *matHeaderCellDef  class=\"headerCell\">Email</mat-header-cell> \r\n          <mat-cell *matCellDef=\"let element\">{{element.Email}}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"DateOfBirth\">\r\n             <mat-header-cell *matHeaderCellDef class=\"headerCell\">DateOfBirth</mat-header-cell> \r\n            <mat-cell *matCellDef=\"let element\">{{element.DateOfBirth}}</mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"UserID\">\r\n               <mat-header-cell *matHeaderCellDef class=\"headerCell\">UserID</mat-header-cell> \r\n              <mat-cell *matCellDef=\"let element\">{{element.UserID}}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"PhoneNumber\">\r\n                 <mat-header-cell *matHeaderCellDef class=\"headerCell\">PhoneNumber</mat-header-cell> \r\n                <mat-cell *matCellDef=\"let element\">{{element.PhoneNumber}}</mat-cell>\r\n              </ng-container>\r\n              <!-- <ng-container matColumnDef=\"edit\">\r\n                  <mat-header-cell  *matHeaderCellDef class=\"headerCell\"> edit </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\" >\r\n                    <mat-icon color=\"warn\" (click)=\"editBook(element)\">edit</mat-icon>\r\n                  </mat-cell>\r\n              </ng-container>  -->\r\n              <ng-container matColumnDef=\"delete\">\r\n                <mat-header-cell  *matHeaderCellDef class=\"headerCell\"> Delete </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                  <mat-icon color=\"warn\" (click)=\"deleteUser(element)\">delete</mat-icon>\r\n                </mat-cell>\r\n            </ng-container> \r\n              <ng-container matColumnDef=\"loading\">\r\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                  Loading data...\r\n                </mat-footer-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"nodata\">\r\n                  <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                    No data...\r\n                  </mat-footer-cell>\r\n                </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n    </mat-header-row>\r\n    <mat-row class=\"mat-row-id\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':dataSource!=null}\"></mat-footer-row>\r\n    <mat-footer-row *matFooterRowDef=\"['nodata']\" [ngClass]=\"{'hide':!(dataSource!=null && dataSource.data.length==0)}\"></mat-footer-row>\r\n      </mat-table>\r\n    </div> "

/***/ }),

/***/ "./src/app/layout/user-details/user-details.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/user-details/user-details.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItZGV0YWlscy9EOlxcTGlicmFyeUFwcF9Bbmd1bGFyL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXItZGV0YWlsc1xcdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICAgIGRpc3BsYXkgOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/user-details/user-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/user-details/user-details.component.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ConfirmationPopupService } from './../../confirmationPopup/confirmationPopup.service';
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userservice, router, dialog) {
        this.userservice = userservice;
        this.router = router;
        this.dialog = dialog;
        this.users = [];
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['UserName', 'Email', 'DateOfBirth', 'UserID', 'PhoneNumber', 'delete'];
        this.userservice.getUsersDetails().subscribe(function (userlist) {
            userlist.forEach(function (x) {
                _this.users.push(x);
            });
            console.log(JSON.stringify(_this.users));
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.users);
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    UserDetailsComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.applyFilter();
    };
    UserDetailsComponent.prototype.applyFilter = function () {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
    };
    UserDetailsComponent.prototype.deleteUser = function (user) {
        var _this = this;
        // this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
        // .then((confirmed) => {
        if (window.confirm('Do u want to delete?')) {
            this.userservice.deleteUser(user).subscribe(function (data) {
                if (data) {
                    var i = _this.users.findIndex(function (e) { return e.UserName === user.UserName; });
                    if (i !== -1) {
                        _this.users.splice(i, 1);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.users);
                    }
                }
            }, function (error) { console.log(error); });
        }
        //  })
        // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UserDetailsComponent.prototype, "paginator", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userDetails',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/layout/user-details/user-details.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/layout/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-details/user-details.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/user-details/user-details.module.ts ***!
  \************************************************************/
/*! exports provided: UserDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsModule", function() { return UserDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details-routing.module */ "./src/app/layout/user-details/user-details-routing.module.ts");
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details.component */ "./src/app/layout/user-details/user-details.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserDetailsModule = /** @class */ (function () {
    function UserDetailsModule() {
    }
    UserDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDetailsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],],
            declarations: [_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"]],
            providers: [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]]
        })
    ], UserDetailsModule);
    return UserDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-details-user-details-module.js.map