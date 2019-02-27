(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"login-page\" [@routerTransition]>\r\n    <div class=\"form\">\r\n    <form [formGroup]=\"loginForm\" (submit)=\"onLoggedin()\" >\r\n        <!-- //(ngSubmit)=\"onSubmit()\" -->\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"example-full-width\" >\r\n              <input matInput placeholder=\"UserName\" formControlName=\"UserName\">\r\n              <mat-error>This field is mandatory.</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Password\" formControlName=\"Password\"  [type]=\"hide ? 'password':'text'\" />\r\n              <mat-error>This field is mandatory.</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <button   mat-raised-button color=\"primary\"  [routerLink]=\"['/dashboard']\" (click)=\"onLoggedin()\" >Login</button>\r\n        <p class=\"message\">Already registered? <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">{{ 'Register' | translate }}</a>\r\n        <!-- <a (click)=CreateBook()>createbook</a> -->\r\n      </form>\r\n      <span *ngIf=\"ShowInvalidLogin\" style=\"color:red\">Invalid Credentials</span>\r\n      </div>\r\n  </div>\r\n  \r\n  \r\n\r\n<!-- <a class=\"btn rounded-btn\" [routerLink]=\"['/dashboard']\" (click)=\"onLoggedin()\">{{ 'Log in' | translate }}</a>\r\n&nbsp;\r\n<a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">{{ 'Register' | translate }}</a>\r\n</form> -->"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto; }\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n/* .form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n} */\n/* .form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #4CAF50;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  -webkit-transition: all 0.3 ease;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #43A047;\r\n} */\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px; }\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none; }\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto; }\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n.container .info {\n  margin: 50px auto;\n  text-align: center; }\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a; }\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px; }\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n.container .info span .fa {\n  color: #EF3B3A; }\nbody {\n  background: #76b852;\n  /* fallback for old browsers */\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXExpYnJhcnlBcHBfQW5ndWxhci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBWTtBQUVaO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZLEVBQUE7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwRUFBMEUsRUFBQTtBQUU1RTs7Ozs7Ozs7OztHQ1NHO0FERUg7Ozs7Ozs7Ozs7Ozs7Ozs7R0NlRztBREVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTtBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxtQkFBbUI7RUFBRSw4QkFBQTtFQUlyQixzREFBc0Q7RUFDdEQsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBwYWRkaW5nOiA4JSAwIDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5mb3JtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIG1heC13aWR0aDogMzYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XHJcbiAgcGFkZGluZzogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuLyogLmZvcm0gaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59ICovXHJcbi8qIC5mb3JtIGJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvcm0gYnV0dG9uOmhvdmVyLC5mb3JtIGJ1dHRvbjphY3RpdmUsLmZvcm0gYnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBMDQ3O1xyXG59ICovXHJcbi5mb3JtIC5tZXNzYWdlIHtcclxuICBtYXJnaW46IDE1cHggMCAwO1xyXG4gIGNvbG9yOiAjYjNiM2IzO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZm9ybSAubWVzc2FnZSBhIHtcclxuICBjb2xvcjogIzRDQUY1MDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY29udGFpbmVyOmJlZm9yZSwgLmNvbnRhaW5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIHtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XHJcbiAgbWFyZ2luOiAwIDAgMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMWExYTFhO1xyXG59XHJcbi5jb250YWluZXIgLmluZm8gc3BhbiB7XHJcbiAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jb250YWluZXIgLmluZm8gc3BhbiBhIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XHJcbiAgY29sb3I6ICNFRjNCM0E7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzc2Yjg1MjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc2Yjg1MiwgIzhEQzI2Rik7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgICAgICBcclxufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcbi5sb2dpbi1wYWdlIHtcbiAgd2lkdGg6IDM2MHB4O1xuICBwYWRkaW5nOiA4JSAwIDA7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gIHBhZGRpbmc6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7IH1cblxuLyogLmZvcm0gaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59ICovXG4vKiAuZm9ybSBidXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogIzQzQTA0NztcclxufSAqL1xuLmZvcm0gLm1lc3NhZ2Uge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5mb3JtIC5tZXNzYWdlIGEge1xuICBjb2xvcjogIzRDQUY1MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoOyB9XG5cbi5jb250YWluZXIgLmluZm8ge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jb250YWluZXIgLmluZm8gaDEge1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMWExYTFhOyB9XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiB7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiAuZmEge1xuICBjb2xvcjogI0VGM0IzQTsgfVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzc2Yjg1MjtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NmI4NTIsICM4REMyNkYpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/authenticationService */ "./src/app/shared/services/authenticationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(translate, router, formBuilder, authService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.hide = true;
        this.submitted = false;
        this.isValid = false;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLoggedin = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value).subscribe(function (details) {
            if (details == true) {
                localStorage.removeItem('currentUser');
                _this.ShowInvalidLogin = false;
                _this.authService.GetCurrentUser().subscribe(function (data) {
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (data && currentUser !== null) {
                        _this.router.navigate(['/dashboard']);
                    }
                }, function (error) {
                    console.log("Error", error);
                });
            }
            else {
                _this.ShowInvalidLogin = true;
            }
        }, function (error) {
            console.log('Error', error);
            _this.ShowInvalidLogin = true;
        });
        // localStorage.setItem('isLoggedin', 'true');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_authenticationService__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map