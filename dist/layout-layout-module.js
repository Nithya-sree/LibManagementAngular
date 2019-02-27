(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">Library Management </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <span>dashboard</span>\r\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >\r\n        </form> -->\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <!-- <li class=\"nav-item d-none d-xl-block\">\r\n                <a\r\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-7/archive/master.zip\"\r\n                    class=\"nav-link btn mt-1\" role=\"button\"\r\n                    style=\"padding: .375rem 1rem !important;border-color: #999;\"\r\n                >\r\n                    {{ 'Download Now' | translate }}\r\n                </a>\r\n            </li> &nbsp; -->\r\n            <li class=\"nav-item\">\r\n                <a href=\"javascript:void(0)\" class=\"nav-link mt-1\"\r\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\r\n                    (click)=\"rltAndLtr()\"\r\n                >\r\n                    RTL/LTR\r\n                </a>\r\n            </li> &nbsp;\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                </a>\r\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\"\r\n                        >\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\r\n                            alt=\"Generic placeholder image\"\r\n                        >\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\r\n                            alt=\"Generic placeholder image\"\r\n                        />\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\r\n                    </a>\r\n                    <li class=\"dropdown-divider\"></li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'View All' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <!-- <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\r\n                </a> -->\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                        {{ 'English' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                        {{ 'French' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                        {{ 'Urdu' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                        {{ 'Spanish' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                        {{ 'Italian' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                        {{ 'Farsi' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                        {{ 'German' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('zh-CHS')\">\r\n                        {{ 'Simplified Chinese' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-user\"></i>{{ UserName }}<b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\r\n                    </a> -->\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxMaWJyYXJ5QXBwX0FuZ3VsYXIvc3JjXFxhcHBcXGxheW91dFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxzQkFIc0IsRUFBQTtFQUM5QjtJQUlZLFdBQVcsRUFBQTtFQUp2QjtJQU9ZLFdBQVcsRUFBQTtFQVB2QjtNQVNnQixXQUFXLEVBQUE7RUFUM0I7RUFjUSxZQUFZLEVBQUE7RUFkcEI7SUFnQlksNkJBQTZCO0lBQzdCLGlCQUFpQixFQUFBO0VBakI3QjtNQW1CZ0IsbUJBQW1CLEVBQUE7RUFuQm5DO0lBd0JnQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUF6QmhDO0lBNEJnQixTQUFTLEVBQUE7RUE1QnpCO0lBK0JnQixlQUFlO0lBQ2YsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuOmhvc3Qge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1pdGVtID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VzIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVkaWEtYm9keSB7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFzdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.pushRightClass = 'push-right';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
            this.UserName = currentUser.UserName;
            this.roleType = currentUser.RoleType === 0 ? true : false;
        }
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        // localStorage.removeItem('isLoggedin');
        // localStorage.removeItem('accessToken');
        sessionStorage.removeItem('accessToken');
        localStorage.clear();
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n       \r\n    <div class=\"list-group\">\r\n            <div class=\"profile\" *ngIf=\"!collapsed\">\r\n                    <div class=\"profile-image\" >\r\n                        <img src=\"https://librarymanagement.blob.core.windows.net/blobs/img_fjords.jpg\" alt=\"John Doe\">\r\n                    </div>\r\n                    <div class=\"profile-data\">\r\n                        <div class=\"profile-data-name\">{{ UserName }}</div>\r\n                    </div>\r\n                    <div class=\"profile-controls\">\r\n                        <a class=\"profile-control-left\"><span class=\"fa fa-info\"></span></a>\r\n                        <a class=\"profile-control-right\"><span class=\"fa fa-envelope\"></span></a>\r\n                    </div>\r\n                </div>\r\n                <a class=\"list-group-item\" *ngIf=\"collapsed\">\r\n                        <div class=\"circle\">\r\n                                <label>{{userNameFirstChar}}</label>\r\n                              </div>\r\n                        <!-- <img class=\"smallimg\" src=\"https://librarymanagement.blob.core.windows.net/blobs/img_fjords.jpg\" width=\"25\" height=\"25\"> -->\r\n                    <!-- <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n                    <span>{{ 'Dashboard' | translate }}</span> -->\r\n                </a>\r\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\r\n            <span>{{ 'Dashboard' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"/user-details\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" *ngIf=\"!roleType\">\r\n            <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n            <span>{{ 'User Details' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"/createbook\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" *ngIf=\"!roleType\">\r\n            <i class=\"fa fa-fw fa-plus\"></i>&nbsp;\r\n            <span>{{ 'Add Book' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"/books\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-book\"></i>&nbsp;\r\n            <span>{{ 'Book List' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"/changePassword\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-key\"></i>&nbsp;\r\n            <span>{{ 'Change Password' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"/issuingBooks\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" *ngIf=\"!roleType\">\r\n            <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n            <span>{{ 'Book Issue' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"/returnBooks\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" *ngIf=\"!roleType\">\r\n            <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n            <span>{{ 'Book Return' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"/profileDetails\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n            <span>{{ 'Profile' | translate }}</span>\r\n        </a>\r\n        <!-- <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n            <span>{{ 'Charts' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;\r\n            <span>{{ 'Tables' | translate }}</span>\r\n        </a> -->\r\n        <!-- <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\r\n            <span>{{ 'Forms' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\r\n            <span>{{ 'Bootstrap Element' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\r\n            <span>{{ 'Bootstrap Grid' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-th-list\"></i>&nbsp;\r\n            <span>{{ 'Component' | translate }}</span>\r\n        </a>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp;\r\n                <span>{{ 'Menu' | translate }}</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Submenu' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Submenu' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Submenu' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div> -->\r\n        <!-- <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-file-o\"></i>&nbsp;\r\n            <span>{{ 'Blank Page' | translate }}</span>\r\n        </a> -->\r\n        <!-- <a href=\"http://www.strapui.com/\" class=\"list-group-item\">\r\n            <i class=\"fa fa-caret-down\"></i>&nbsp;\r\n            <span>{{ 'More Themes' | translate }}</span>\r\n        </a> -->\r\n\r\n        <div class=\"header-fields\">\r\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\r\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\r\n            </a>\r\n            <div class=\"nested-menu\">\r\n                <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\r\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\r\n                </a>\r\n                <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\r\n                    <ul class=\"submenu\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                                {{ 'English' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                                {{ 'French' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                                {{ 'Urdu' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                                {{ 'Spanish' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                                {{ 'Italian' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                                {{ 'Farsi' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                                {{ 'German' | translate }}\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </div>\r\n            <div class=\"nested-menu\">\r\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\r\n                    <span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>\r\n                </a>\r\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\r\n                    <ul class=\"submenu\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\r\n        <i class=\"fa fa-fw fa-angle-double-left\"></i>&nbsp;\r\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #1caf9a;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radius: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 5px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 60px; }\n  .collapsed span {\n    display: none; }\n  /* PROFILE */\n  .profile {\n  width: 100%;\n  float: left;\n  padding: 15px 10px;\n  position: relative;\n  background: #000; }\n  .profile .profile-image {\n  float: left;\n  width: 100%;\n  margin: 0px 0px 10px;\n  text-align: center; }\n  .profile .profile-image img {\n  width: 100px;\n  border: 3px solid #FFF;\n  border-radius: 20%; }\n  .smallimg {\n  border: 3px solid #FFF;\n  border-radius: 20%; }\n  .circle {\n  position: relative;\n  width: 25px;\n  height: 25px;\n  padding-bottom: 50%;\n  background: #1caf9a;\n  border-radius: 50%; }\n  .circle label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  margin: 0;\n  font-weight: bold;\n  color: white; }\n  .profile .profile-data {\n  width: 100%;\n  float: left;\n  text-align: center; }\n  .profile .profile-data .profile-data-name {\n  width: 100%;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  color: #FFF; }\n  .profile .profile-data .profile-data-title {\n  width: 100%;\n  float: left;\n  font-size: 11px;\n  font-weight: 400;\n  color: #999; }\n  .profile .profile-controls a {\n  width: 30px;\n  height: 30px;\n  font-size: 14px;\n  color: #DDD;\n  border: 2px solid #DDD;\n  line-height: 25px;\n  position: absolute;\n  border-radius: 20%;\n  padding: 0px;\n  transition: all 200ms ease; }\n  .profile .profile-controls a.profile-control-left {\n  left: 15px;\n  top: 53px;\n  text-align: center; }\n  .profile .profile-controls a.profile-control-right {\n  right: 15px;\n  top: 53px;\n  text-align: center; }\n  .profile .profile-controls a .fa,\n.profile .profile-controls a .glyphicon {\n  width: auto;\n  margin-right: auto; }\n  .profile .profile-controls a:hover {\n  border-color: #FFF;\n  color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9EOlxcTGlicmFyeUFwcF9Bbmd1bGFyL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQWIwQjtFQWMxQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFLbkIsZ0NBQWdDLEVBQUE7RUFyQnBDO0lBeUJZLGdCQTFCa0I7SUEyQmxCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQixFQUFBO0VBN0JqQztNQStCZ0Isa0JBQWtCLEVBQUE7RUEvQmxDO0lBbUNZLG1CQUFnRDtJQUNoRCxXQUFXLEVBQUE7RUFwQ3ZCO0lBdUNZLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7RUF4Q3ZCO0lBMkNZLGlCQUFpQixFQUFBO0VBM0M3QjtNQThDZ0IsOENBQThDLEVBQUE7RUE5QzlEO0lBb0RZLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUFyRHhCO0lBd0RZLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUExRDVCO01BNERnQixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLGdCQUFnQjtNQUNoQixnQkFoRWMsRUFBQTtFQUM5QjtRQWlFb0Isa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsaUJBQWlCLEVBQUE7RUFwRXJDOztNQXlFZ0IsV0FBVztNQUNYLGFBQWE7TUFDYixvQkFBb0IsRUFBQTtFQTNFcEM7SUErRVksbUJBQWdELEVBQUE7RUEvRTVEO0lBbUZZLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFwRnhCO01BdUZvQixnQkFBZ0I7TUFDaEIsc0JBekZVO01BMEZWLDJCQUEyQixFQUFBO0VBekYvQztRQTJGd0IsV0FBVyxFQUFBO0VBM0ZuQztRQThGd0IsV0FBVyxFQUFBO0VBOUZuQztNQWtHb0IsbUJBQWdELEVBQUE7RUFPcEU7RUFFUSxlQUFlLEVBQUE7RUFGdkI7RUFLUSxxQkFBcUIsRUFBQTtFQUw3QjtFQVFRLGFBQWE7RUFDYixTQUFTLEVBQUE7RUFUakI7RUFhWSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtFQWZ4QjtJQWtCb0IsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjLEVBQUE7RUFNbEM7RUFDSTtJQUNJLFNBQVM7SUFDVCxTQUFTLEVBQUEsRUFDWjtFQUVMO0VBQ0k7SUFDSSx3QkFBd0IsRUFBQSxFQUMzQjtFQUVMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEI7RUFHTDtFQUNJLFVBQVUsRUFBQTtFQUdkO0VBQ0ksdUNBQXdEO0VBQ3hELGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLHVDQUF3RCxFQUFBO0VBRzVEO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBUW5CLDBCQUEwQjtFQUsxQixnQ0FBZ0MsRUFBQTtFQXBCcEM7SUFTUSxlQUFlLEVBQUE7RUFUdkI7SUFZUSxtQkFBZ0Q7SUFDaEQsV0FBVyxFQUFBO0VBVW5CO0VBQ0ksV0FBVyxFQUFBO0VBRGY7SUFHUSxhQUFhLEVBQUE7RUFJckIsWUFBQTtFQUNBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7RUFFcEI7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBR3RCLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0Usc0JBQXNCO0VBR3RCLGtCQUFrQixFQUFBO0VBRXBCO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBaUIsRUFBQTtFQUVuQjtFQUNFLGtCQUFpQjtFQUNqQixRQUFPO0VBQUUsU0FBUTtFQUNqQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFNBQVE7RUFDUixpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBRWQ7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBRXBCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtFQUViO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtFQUViO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBR2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBS1osMEJBQTBCLEVBQUE7RUFFNUI7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBRXBCO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTtFQUVwQjs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgYS5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWNhZjlhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci1kcm9wZG93biB7XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIsXHJcbiAgICAgICAgICAgIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAucGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmVzdGVkLW1lbnUge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5lc3RlZCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwuc3VibWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmIC5leHBhbmQge1xyXG4gICAgICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIHRvcDogNTRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaGVhZGVyLWZpZWxkcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4udG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMjM2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBQUk9GSUxFICovXHJcbi5wcm9maWxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIH1cclxuICAucHJvZmlsZSAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wcm9maWxlIC5wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZGO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICB9XHJcblxyXG4gIC5zbWFsbGltZyB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZGO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICB9XHJcbiAgLmNpcmNsZXtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWNhZjlhO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgfVxyXG4gIC5jaXJjbGUgbGFiZWx7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7IGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAucHJvZmlsZSAucHJvZmlsZS1kYXRhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wcm9maWxlIC5wcm9maWxlLWRhdGEgLnByb2ZpbGUtZGF0YS1uYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIC5wcm9maWxlIC5wcm9maWxlLWRhdGEgLnByb2ZpbGUtZGF0YS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICAucHJvZmlsZSAucHJvZmlsZS1jb250cm9scyBhIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNEREQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjREREO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gIH1cclxuICAucHJvZmlsZSAucHJvZmlsZS1jb250cm9scyBhLnByb2ZpbGUtY29udHJvbC1sZWZ0IHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6IDUzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wcm9maWxlIC5wcm9maWxlLWNvbnRyb2xzIGEucHJvZmlsZS1jb250cm9sLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA1M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucHJvZmlsZSAucHJvZmlsZS1jb250cm9scyBhIC5mYSxcclxuICAucHJvZmlsZSAucHJvZmlsZS1jb250cm9scyBhIC5nbHlwaGljb24ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5wcm9maWxlIC5wcm9maWxlLWNvbnRyb2xzIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZGO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
            this.userNameFirstChar = currentUser.UserName.charAt(0);
            this.roleType = currentUser.RoleType === 0 ? true : false;
            this.UserName = currentUser.UserName;
        }
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        // localStorage.removeItem('isLoggedin');
        // localStorage.removeItem('accessToken');
        sessionStorage.removeItem('accessToken');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'books', loadChildren: './books/books.module#BooksModule' },
            { path: 'user-details', loadChildren: './user-details/user-details.module#UserDetailsModule' },
            { path: 'createbook', loadChildren: './createbook/createbook.module#CreateBookModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'changePassword', loadChildren: './changePassword/changePassword.module#ChangePasswordModule' },
            { path: 'profileDetails', loadChildren: './profileDetails/profileDetails.module#ProfileDetailsModule' },
            { path: 'issuingBooks', loadChildren: './issuingBooksList/issuingBooksList.module#IssuingBooksListModule' },
            { path: 'returnBooks', loadChildren: './returnBookList/returnBookList.module#ReturnBookListModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0Q6XFxMaWJyYXJ5QXBwX0FuZ3VsYXIvc3JjXFxhcHBcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksd0NBQXdDLEVBQUE7O0FBRTVDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJO0lBQ0ksMkJBQTJCLEVBQUEsRUFDOUI7O0FBRUw7RUFDSTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkIsRUFBQSxFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjM1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNvbGxhcHNlZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map