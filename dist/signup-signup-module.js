(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: GenderType, RoleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderType", function() { return GenderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleType", function() { return RoleType; });
var GenderType;
(function (GenderType) {
    GenderType[GenderType["male"] = 0] = "male";
    GenderType[GenderType["female"] = 1] = "female";
})(GenderType || (GenderType = {}));
var RoleType;
(function (RoleType) {
    RoleType[RoleType["student"] = 0] = "student";
    RoleType[RoleType["admin"] = 1] = "admin";
})(RoleType || (RoleType = {}));


/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n    <div class=\"form\">\r\n        <h3>  Registration</h3>\r\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"form-inline\">\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"First Name\" formControlName=\"FirstName\" [errorStateMatcher]=\"matcher\">\r\n              <mat-error *ngIf=\"registerForm.hasError('FirstName') && !registerForm.hasError('required')\">\r\n                Please enter a valid email address\r\n              </mat-error>\r\n              <mat-error *ngIf=\"registerForm.hasError('required')\">\r\n                Email is <strong>required</strong>\r\n              </mat-error>\r\n              </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\" class=\"form-group\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Middle Name\" formControlName=\"MiddleName\" >\r\n              </mat-form-field>\r\n      </div>\r\n        <div class=\"col-md-4\" class=\"form-group\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Last Name\" formControlName=\"LastName\" [errorStateMatcher]=\"matcher\">\r\n                <!-- <mat-error *ngIf=\"registerForm.hasError('firstName') && !registerForm.hasError('required')\">\r\n                  Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"registerForm.hasError('required')\">\r\n                  Email is <strong>required</strong>\r\n                </mat-error> -->\r\n                </mat-form-field>\r\n          </div>\r\n        \r\n        <div class=\"col-md-4\" class=\"form-group\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"User Name\" formControlName=\"UserName\" [errorStateMatcher]=\"matcher\">\r\n              </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-7\" class=\"form-group\">\r\n          <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Phone Number\" formControlName=\"PhoneNumber\" [errorStateMatcher]=\"matcher\">\r\n            </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-3\" class=\"form-group\">   </div>\r\n       \r\n \r\n    <div class=col-md-6 class=\"form-group \">\r\n         <mat-form-field>\r\n          <mat-select placeholder=\"Select Gender...\"  formControlName=\"Gender\">\r\n              <mat-option *ngFor=\"let gender of genderKeys()\" \r\n              [value]=\"genderValues[gender]\">\r\n                {{gender}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n     </div>\r\n            <div class=\"col-md-7\" class=\"form-group\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Email\" formControlName=\"Email\" [errorStateMatcher]=\"matcher\">\r\n                  </mat-form-field>\r\n            </div>\r\n        \r\n       <div class=col-md-4 >\r\n         <div class=col-md-4 class=\"form-group\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput  [matDatepicker]=\"picker\" placeholder=\"Select DOB\" formControlName=\"DateOfBirth\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n         </div>\r\n           </div>\r\n        <div class=col-md-4 class=\"form-group\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Password\" formControlName=\"Password\" [errorStateMatcher]=\"matcher\"  [type]=\"hide ? 'password':'text'\">\r\n              </mat-form-field>\r\n        </div>\r\n        <div class=col-md-6 class=\"form-group\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Confirm Password\" formControlName=\"ConfirmPassword\" [errorStateMatcher]=\"matcher\"  [type]=\"hide ? 'password':'text'\">\r\n              </mat-form-field>\r\n        </div>\r\n      \r\n        \r\n        \r\n        <div class=\"form-group\" class=\"col-md-12\">\r\n              <button style=\"margin: 10px; float: right;\" mat-raised-button color=\"primary\">Register</button>\r\n              <a routerLink='/login' class=\"btn btn-link\" style=\"margin: 10px; float: right;\"mat-raised-button color=\"Cancel\">Cancel</a>\r\n        </div>\r\n      </form>\r\n      <div *ngIf=\"showError\">\r\n        <span  style=\"color:red\">{{errormsg}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.login-page {\n  width: 1200px;\n  padding: 5% 0 0;\n  margin: auto; }\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 700px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px; }\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none; }\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto; }\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n.container .info {\n  margin: 50px auto;\n  text-align: center; }\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a; }\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px; }\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n.container .info span .fa {\n  color: #EF3B3A; }\n.form-group {\n  padding: 10px; }\nbody {\n  background: #76b852;\n  /* fallback for old browsers */\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.userid {\n  margin-left: 15% !important; }\n.optionStyle {\n  -webkit-transform: translateX(-5px) translateY(28px) !important;\n          transform: translateX(-5px) translateY(28px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxMaWJyYXJ5QXBwX0FuZ3VsYXIvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUFZO0FBRVo7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVksRUFBQTtBQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBFQUEwRSxFQUFBO0FBRTVFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTtBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxhQUFhLEVBQUE7QUFNZjtFQUNFLG1CQUFtQjtFQUFFLDhCQUFBO0VBSXJCLHNEQUFzRDtFQUN0RCxpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBO0FBRXBDO0VBRUksMkJBQTJCLEVBQUE7QUFHL0I7RUFFSSwrREFBdUQ7VUFBdkQsdURBQXVELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMjAwcHg7XHJcbiAgcGFkZGluZzogNSUgMCAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xyXG4gIHBhZGRpbmc6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcbi5mb3JtIC5tZXNzYWdlIHtcclxuICBtYXJnaW46IDE1cHggMCAwO1xyXG4gIGNvbG9yOiAjYjNiM2IzO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZm9ybSAubWVzc2FnZSBhIHtcclxuICBjb2xvcjogIzRDQUY1MDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY29udGFpbmVyOmJlZm9yZSwgLmNvbnRhaW5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIHtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XHJcbiAgbWFyZ2luOiAwIDAgMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMWExYTFhO1xyXG59XHJcbi5jb250YWluZXIgLmluZm8gc3BhbiB7XHJcbiAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jb250YWluZXIgLmluZm8gc3BhbiBhIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XHJcbiAgY29sb3I6ICNFRjNCM0E7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4vLyAuZm9ybSBhIDpob3ZlcntcclxuLy8gICBjb2xvcjpyZWQ7XHJcbiAgXHJcbi8vIH1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzc2Yjg1MjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc2Yjg1MiwgIzhEQzI2Rik7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG4udXNlcmlkXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLm9wdGlvblN0eWxlXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KSB0cmFuc2xhdGVZKDI4cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _Customvalidation_MustMatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Customvalidation/MustMatch */ "./src/app/Customvalidation/MustMatch.ts");
/* harmony import */ var _shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/authenticationService */ "./src/app/shared/services/authenticationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var now = new Date();
var SignupComponent = /** @class */ (function () {
    function SignupComponent(translate, router, formBuilder, authService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.submitted = false;
        this.hide = true;
        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.date = now.getDate();
        this.minDate = new Date(1900, 0, 1);
        this.maxDate = new Date(this.year, this.month, this.date);
        this.genderValues = _model_user_model__WEBPACK_IMPORTED_MODULE_5__["GenderType"];
        this.userValues = _model_user_model__WEBPACK_IMPORTED_MODULE_5__["RoleType"];
        this.matcher = new MyErrorStateMatcher();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }
    SignupComponent.prototype.genderKeys = function () {
        var keys = Object.keys(this.genderValues);
        return keys.slice(keys.length / 2);
    };
    SignupComponent.prototype.userKeys = function () {
        var keys = Object.keys(this.userValues);
        return keys.slice(keys.length / 2);
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z ]*$')])],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z ]*$')])],
            MiddleName: [''],
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9]*$')])],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-zA-Z]{3}$')])],
            Gender: [_model_user_model__WEBPACK_IMPORTED_MODULE_5__["GenderType"].male, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]{10}$')])],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: Object(_Customvalidation_MustMatch__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('Password', 'ConfirmPassword')
        });
    };
    SignupComponent.prototype.LoginForm = function () {
        this.router.navigate(['/login']);
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }
        this.authService.registration(this.registerForm.value).subscribe(function (details) {
            if (details) {
                _this.showError = false;
                _this.LoginForm();
            }
        }, function (error) {
            _this.showError = true;
            if (error.status == 400) {
                _this.errormsg = error.error.Message;
            }
            console.log("Error", error);
        });
        ////alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        console.log(JSON.stringify(this.registerForm.value));
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], SignupComponent);
    return SignupComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map