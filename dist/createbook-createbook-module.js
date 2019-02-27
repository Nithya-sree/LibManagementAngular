(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createbook-createbook-module"],{

/***/ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js ***!
  \***************************************************************************/
/*! exports provided: MatSelectSearchComponent, MatSelectSearchVersion, NgxMatSelectSearchModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchComponent", function() { return MatSelectSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchVersion", function() { return MatSelectSearchVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatSelectSearchModule", function() { return NgxMatSelectSearchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MatSelectSearchClearDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive for providing a custom clear-icon.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
 * </ngx-mat-select-search>
 */
var MatSelectSearchClearDirective = /** @class */ (function () {
    function MatSelectSearchClearDirective() {
    }
    MatSelectSearchClearDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[ngxMatSelectSearchClear]'
                },] }
    ];
    return MatSelectSearchClearDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:member-ordering component-selector */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * \@Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
var MatSelectSearchComponent = /** @class */ (function () {
    function MatSelectSearchComponent(matSelect, changeDetectorRef, matOption) {
        if (matOption === void 0) { matOption = null; }
        this.matSelect = matSelect;
        this.changeDetectorRef = changeDetectorRef;
        this.matOption = matOption;
        /**
         * Label of the search placeholder
         */
        this.placeholderLabel = 'Suche';
        /**
         * Label to be shown when no entries are found. Set to null if no message should be shown.
         */
        this.noEntriesFoundLabel = 'Keine Optionen gefunden';
        /**
         * Whether or not the search field should be cleared after the dropdown menu is closed.
         * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
         */
        this.clearSearchInput = true;
        /**
         * Disables initial focusing of the input field
         */
        this.disableInitialFocus = false;
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        /**
         * Whether the backdrop class has been set
         */
        this.overlayClassSet = false;
        /**
         * Event that emits when the current value changes
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(MatSelectSearchComponent.prototype, "isInsideMatOption", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.matOption;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: /**
         * Current search value
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelectSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set custom panel class
        /** @type {?} */
        var panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // set custom mat-option class if the component was placed inside a mat-option
        if (this.matOption) {
            this.matOption.disabled = true;
            this.matOption._getHostElement().classList.add('contains-mat-select-search');
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function (opened) {
            if (opened) {
                // focus the search field when opening
                _this.getWidth();
                if (!_this.disableInitialFocus) {
                    _this._focus();
                }
            }
            else {
                // clear it when closing
                if (_this.clearSearchInput) {
                    _this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this._options = _this.matSelect.options;
            _this._options.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                /** @type {?} */
                var keyManager = _this.matSelect._keyManager;
                if (keyManager && _this.matSelect.panelOpen) {
                    // avoid "expression has been changed" error
                    setTimeout(function () {
                        // set first item active and input width
                        keyManager.setFirstItemActive();
                        _this.getWidth();
                        // set no entries found class on mat option
                        if (_this.matOption) {
                            if (_this._noEntriesFound()) {
                                _this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                            }
                            else {
                                _this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                            }
                        }
                    }, 1);
                }
            });
        });
        // detect changes when the input changes
        this.change
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.changeDetectorRef.detectChanges();
        });
        this.initMultipleHandling();
    };
    /**
     * @return {?}
     */
    MatSelectSearchComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    /**
     * @return {?}
     */
    MatSelectSearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setOverlayClass();
        // update view when available options change
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.matSelect.options.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.changeDetectorRef.markForCheck();
            });
        });
    };
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {?} event
     * @return {?}
     */
    MatSelectSearchComponent.prototype._handleKeydown = /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent propagation for all alphanumeric characters in order to avoid selection issues
        if ((event.key && event.key.length === 1) ||
            (event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["A"] && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["Z"]) ||
            (event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ZERO"] && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["NINE"]) ||
            (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["SPACE"])) {
            event.stopPropagation();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatSelectSearchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.change.emit(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatSelectSearchComponent.prototype.onInputChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this.initMultiSelectedValues();
            this._value = value;
            this.onChange(value);
            this.change.emit(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatSelectSearchComponent.prototype.onBlur = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.writeValue(value);
        this.onTouched();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MatSelectSearchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MatSelectSearchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Focuses the search input field
     */
    /**
     * Focuses the search input field
     * @return {?}
     */
    MatSelectSearchComponent.prototype._focus = /**
     * Focuses the search input field
     * @return {?}
     */
    function () {
        if (!this.searchSelectInput || !this.matSelect.panel) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        /** @type {?} */
        var panel = this.matSelect.panel.nativeElement;
        /** @type {?} */
        var scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    };
    /**
     * Resets the current search value
     * @param focus whether to focus after resetting
     */
    /**
     * Resets the current search value
     * @param {?=} focus whether to focus after resetting
     * @return {?}
     */
    MatSelectSearchComponent.prototype._reset = /**
     * Resets the current search value
     * @param {?=} focus whether to focus after resetting
     * @return {?}
     */
    function (focus) {
        if (!this.searchSelectInput) {
            return;
        }
        this.searchSelectInput.nativeElement.value = '';
        this.onInputChange('');
        if (focus) {
            this._focus();
        }
    };
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     */
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     * @private
     * @return {?}
     */
    MatSelectSearchComponent.prototype.setOverlayClass = /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overlayClassSet) {
            return;
        }
        /** @type {?} */
        var overlayClasses = ['cdk-overlay-pane-select-search'];
        if (!this.matOption) {
            // add offset to panel if component is not placed inside mat-option
            overlayClasses.push('cdk-overlay-pane-select-search-with-offset');
        }
        this.matSelect.overlayDir.attach
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // note: this is hacky, but currently there is no better way to do this
            /** @type {?} */
            var element = _this.searchSelectInput.nativeElement;
            /** @type {?} */
            var overlayElement;
            while (element = element.parentElement) {
                if (element.classList.contains('cdk-overlay-pane')) {
                    overlayElement = element;
                    break;
                }
            }
            if (overlayElement) {
                overlayClasses.forEach(function (overlayClass) {
                    overlayElement.classList.add(overlayClass);
                });
            }
        });
        this.overlayClassSet = true;
    };
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     * @private
     * @return {?}
     */
    MatSelectSearchComponent.prototype.initMultipleHandling = /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.matSelect.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function (values) {
            if (_this.matSelect.multiple) {
                /** @type {?} */
                var restoreSelectedValues_1 = false;
                if (_this._value && _this._value.length
                    && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    /** @type {?} */
                    var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                    _this.previousSelectedValues.forEach(function (previousValue) {
                        if (values.indexOf(previousValue) === -1 && optionValues_1.indexOf(previousValue) === -1) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues_1 = true;
                        }
                    });
                }
                if (restoreSelectedValues_1) {
                    _this.matSelect._onChange(values);
                }
                _this.previousSelectedValues = values;
            }
        });
    };
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     */
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     * @private
     * @return {?}
     */
    MatSelectSearchComponent.prototype.getWidth = /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     * @private
     * @return {?}
     */
    function () {
        if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
            return;
        }
        /** @type {?} */
        var element = this.innerSelectSearch.nativeElement;
        /** @type {?} */
        var panelElement;
        while (element = element.parentElement) {
            if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
            }
        }
        if (panelElement) {
            this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
        }
    };
    /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     */
    /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     * @return {?}
     */
    MatSelectSearchComponent.prototype.initMultiSelectedValues = /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     * @return {?}
     */
    function () {
        if (this.matSelect.multiple && !this._value) {
            this.previousSelectedValues = this.matSelect.options
                .filter(function (option) { return option.selected; })
                .map(function (option) { return option.value; });
        }
    };
    /**
     * Returns whether the "no entries found" message should be displayed
     */
    /**
     * Returns whether the "no entries found" message should be displayed
     * @return {?}
     */
    MatSelectSearchComponent.prototype._noEntriesFound = /**
     * Returns whether the "no entries found" message should be displayed
     * @return {?}
     */
    function () {
        if (!this._options) {
            return;
        }
        if (this.matOption) {
            return this.noEntriesFoundLabel && this.value && this._options.length === 1;
        }
        else {
            return this.noEntriesFoundLabel && this.value && this._options.length === 0;
        }
    };
    MatSelectSearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ngx-mat-select-search',
                    template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\n<div\n      #innerSelectSearch\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple}\">\n  <input matInput\n         class=\"mat-select-search-input\"\n         autocomplete=\"off\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (input)=\"onInputChange($event.target.value)\"\n         (blur)=\"onBlur($event.target.value)\"\n         [placeholder]=\"placeholderLabel\"\n  />\n  <button mat-button *ngIf=\"value\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\n    <ng-template #defaultIcon>\n      <mat-icon>close</mat-icon>\n    </ng-template>\n  </button>\n</div>\n\n<div *ngIf=\"_noEntriesFound()\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n<!--\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\n\nUse of this source code is governed by an MIT-style license that can be\nfound in the LICENSE file at https://angular.io/license\n-->\n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatSelectSearchComponent; }),
                            multi: true
                        }
                    ],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}/deep/ .mat-select-search-panel{-webkit-transform:none!important;transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 36px 16px 16px;box-sizing:border-box}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}/deep/ .cdk-overlay-pane-select-search.cdk-overlay-pane-select-search-with-offset{margin-top:-50px}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}"]
                }] }
    ];
    /** @nocollapse */
    MatSelectSearchComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOption"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOption"],] }] }
    ]; };
    MatSelectSearchComponent.propDecorators = {
        placeholderLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        noEntriesFoundLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        clearSearchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disableInitialFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        searchSelectInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['searchSelectInput', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }],
        innerSelectSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['innerSelectSearch', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }],
        clearIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatSelectSearchClearDirective,] }],
        isInsideMatOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['class.mat-select-search-inside-mat-option',] }]
    };
    return MatSelectSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MatSelectSearchVersion = '1.5.0';
var NgxMatSelectSearchModule = /** @class */ (function () {
    function NgxMatSelectSearchModule() {
    }
    NgxMatSelectSearchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
                    ],
                    declarations: [
                        MatSelectSearchComponent,
                        MatSelectSearchClearDirective
                    ],
                    exports: [
                        MatSelectSearchComponent,
                        MatSelectSearchClearDirective
                    ]
                },] }
    ];
    return NgxMatSelectSearchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-mat-select-search.js.map

/***/ }),

/***/ "./src/app/layout/createbook/createbook-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/createbook/createbook-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CreatBookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatBookRoutingModule", function() { return CreatBookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _createbook_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createbook.component */ "./src/app/layout/createbook/createbook.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _createbook_component__WEBPACK_IMPORTED_MODULE_2__["CreateBookComponent"]
    }
];
var CreatBookRoutingModule = /** @class */ (function () {
    function CreatBookRoutingModule() {
    }
    CreatBookRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CreatBookRoutingModule);
    return CreatBookRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/createbook/createbook.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/createbook/createbook.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"custom-control custom-radio custom-control-inline\">\r\n    <input type=\"radio\" class=\"custom-control-input\" id=\"defaultInline1\" name=\"Books\" value=\"\" (click)=\"AddNew()\"\r\n      checked=\"checked\">\r\n    <label class=\"custom-control-label\" for=\"defaultInline1\">Add New</label>\r\n  </div>\r\n  <div class=\"custom-control custom-radio custom-control-inline\">\r\n    <input type=\"radio\" class=\"custom-control-input\" id=\"defaultInline2\" name=\"Books\" (click)=\"AddExisting()\">\r\n    <label class=\"custom-control-label\" for=\"defaultInline2\">Add Existing</label>\r\n  </div>\r\n</div>\r\n\r\n<!-- New book form -->\r\n<div *ngIf=\"isNewBookAdded\" class=\"login-page\">\r\n  <div class=\"form\">\r\n    <form [formGroup]=\"CreateNewBook\" (submit)=\"onSubmit(Image)\" class=\"form-inline\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field class=\"example-full-width\" >\r\n            <input matInput placeholder=\"Book Name\" formControlName=\"Name\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <ng-container formArrayName=\"ISBNNumber\">\r\n          <ng-container formGroupName=\"0\">\r\n            <div class=col-md-4>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"ISBN Number\" formControlName=\"TrackNo\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=col-md-4>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Edition\" formControlName=\"Edition\">\r\n              </mat-form-field>\r\n    \r\n            </div>\r\n            <div class=col-md-4>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Author\" formControlName=\"Author\">\r\n              </mat-form-field>\r\n   \r\n            </div>\r\n            <div class=col-md-4>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Publish Year\" formControlName=\"PublishingYear\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Description\" formControlName=\"Description\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"formGroup\">\r\n                <input type=\"file\" #Image accept=\"image/*\" (change)=\"uploadImage($event)\" id=image formControlName=\"Image\">\r\n                <img [src]=\"url\" height=\"100\" *ngIf=\"isImageUploaded\"  style=\"margin:10px\"> <br />\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <div class=\"col-md-12\">\r\n          <button mat-raised-button color=\"primary\" style=\"margin: 10px; float:right\">Add</button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"onClose()\" tabIndex=\"-1\" style=\"margin: 10px; float:right\">cancel</button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- style= \"display:inline-block;\" -->\r\n<div *ngIf=\"isIncreasedBooks\" class=\"login-page\">\r\n  <div class=\"form\">\r\n    <form [formGroup]=\"AddToExistingBooks\" (submit)=\"onExistingSubmit()\" class=\"form-inline\">\r\n\r\n      <div class=\"row\">\r\n          <div class=\"form-group\" class=\"col-md-4\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Select any...\" [(value)]=\"selectedBook\" [formControl]=\"bankCtrl\">\r\n                  <div>\r\n                    <mat-option>\r\n                      <ngx-mat-select-search [formControl]=\"bankFilterCtrl\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let book of filteredBanks | async\" [value]=\"book.Id\">\r\n                      <img with=\"40\" height=\"40\" src=\"{{book.Image}}\">\r\n                      {{book.Name}}\r\n                    </mat-option>\r\n                  </div>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n              <ng-container formArrayName=\"ISBNNumber\">\r\n                <ng-container formGroupName=\"0\">\r\n                  <div class=\"col-md-4\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"ISBN Number\" formControlName=\"TrackNo\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=col-md-4>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Edition\" formControlName=\"Edition\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=col-md-4>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Description\" formControlName=\"Description\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=col-md-4>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Author\" formControlName=\"Author\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=col-md-4>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Publish Year\" formControlName=\"PublishingYear\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"formGroup\">\r\n                      <input type=\"file\" #Image accept=\"image/*\" (change)=\"uploadImage($event)\" id=image>\r\n                      <img [src]=\"url\" height=\"100\" *ngIf=\"isImageUploaded\" style=\"margin:10px\"> <br />\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </ng-container>\r\n            <div class=\"col-md-12\">\r\n              <button mat-raised-button color=\"primary\" style=\"margin: 10px; float: right;\">Add</button>\r\n              <button mat-raised-button color=\"warn\" (click)=\"onClose()\" tabIndex=\"-1\" style=\"margin: 10px; float: right;\">cancel</button>\r\n            </div>\r\n      </div>\r\n     \r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/createbook/createbook.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/createbook/createbook.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.login-page {\n  width: 900px;\n  padding: 5% 0 0;\n  margin: auto; }\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 700px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px; }\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none; }\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto; }\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n.container .info {\n  margin: 50px auto;\n  text-align: center; }\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a; }\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px; }\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n.container .info span .fa {\n  color: #EF3B3A; }\n.form-group {\n  padding: 10px; }\nbody {\n  background: #76b852;\n  /* fallback for old browsers */\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.userid {\n  margin-left: 15% !important; }\n.optionStyle {\n  -webkit-transform: translateX(-5px) translateY(28px) !important;\n          transform: translateX(-5px) translateY(28px) !important; }\n#image {\n  width: 100%;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NyZWF0ZWJvb2svRDpcXExpYnJhcnlBcHBfQW5ndWxhci9zcmNcXGFwcFxcbGF5b3V0XFxjcmVhdGVib29rXFxjcmVhdGVib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEQSwrREFBWTtBQUdaO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZLEVBQUE7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwRUFBMEUsRUFBQTtBQUU1RTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQixFQUFBO0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXLEVBQUE7QUFFYjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQixFQUFBO0FBRXZCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsYUFBYSxFQUFBO0FBTWY7RUFDRSxtQkFBbUI7RUFBRSw4QkFBQTtFQUlyQixzREFBc0Q7RUFDdEQsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTtBQUVwQztFQUVJLDJCQUEyQixFQUFBO0FBRy9CO0VBRUksK0RBQXVEO1VBQXZELHVEQUF1RCxFQUFBO0FBRTNEO0VBRUUsV0FBVztFQUNYLFlBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jcmVhdGVib29rL2NyZWF0ZWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjYm9va3NEYXRhXHJcbi8vIHtcclxuLy8gICAgIHBhZGRpbmc6IDMwcHhcclxuLy8gfVxyXG5cclxuLy8gICAqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcbi8vIC5mb3JtLWlubGluZSB7ICBcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0taW5saW5lIGxhYmVsIHtcclxuLy8gICBtYXJnaW46IDVweCAxMHB4IDVweCAwO1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1pbmxpbmUgaW5wdXQge1xyXG4vLyAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgbWFyZ2luOiA1cHggMTBweCA1cHggMDtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuLy8gfVxyXG4vLyAjb3B0aW9uc1xyXG4vLyB7XHJcbi8vICAgbWFyZ2luLXRvcDogNTBweFxyXG4vLyB9XHJcbi8vIC8qIC5mb3JtLWlubGluZSBidXR0b24ge1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0taW5saW5lIGJ1dHRvbjpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4vLyB9ICovXHJcbi8vIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuLy8gI2ltYWdlXHJcbi8vIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBib3JkZXI6IG5vbmVcclxuLy8gfVxyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xyXG4vLyBAaW1wb3J0IHVybChodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjQuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MpO1xyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIHdpZHRoOiA5MDBweDtcclxuICBwYWRkaW5nOiA1JSAwIDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5mb3JtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XHJcbiAgcGFkZGluZzogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuLmZvcm0gLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb3JtIC5tZXNzYWdlIGEge1xyXG4gIGNvbG9yOiAjNENBRjUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb250YWluZXIgLmluZm8ge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIGgxIHtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIHNwYW4gLmZhIHtcclxuICBjb2xvcjogI0VGM0IzQTtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi8vIC5mb3JtIGEgOmhvdmVye1xyXG4vLyAgIGNvbG9yOnJlZDtcclxuICBcclxuLy8gfVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjNzZiODUyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbi51c2VyaWRcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ub3B0aW9uU3R5bGVcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVkoMjhweCkgIWltcG9ydGFudDtcclxufVxyXG4jaW1hZ2Vcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/createbook/createbook.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/createbook/createbook.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookComponent", function() { return CreateBookComponent; });
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/book.service */ "./src/app/shared/services/book.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateBookComponent = /** @class */ (function () {
    function CreateBookComponent(formBuilder, router, bookService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.bookService = bookService;
        this.submit = false;
        this.isNewBookAdded = true;
        this.isIncreasedBooks = false;
        this.isImageUploaded = false;
        this.books = [];
        this.fileToUpload = null;
        this.stopSubmitOnClose = false;
        this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.bankFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.filteredBanks = new rxjs__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"](1);
    }
    CreateBookComponent.prototype.getBookData = function () {
        var _this = this;
        var elementId = [];
        this.bookService.getBooks().subscribe(function (booklist) {
            //   this.books = booklist.filter(el => {
            //     if (elementId.indexOf(el.Id) === -1) {
            //         elementId.push(el.Id);
            //         return true;
            //     } else {
            //         return false;
            //     }
            // });
            booklist.forEach(function (x) { return _this.books.push(x); });
            _this.bankCtrl.setValue(_this.books);
            _this.filteredBanks.next(_this.books.slice());
            _this.bankFilterCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterBanks();
            });
        });
    };
    CreateBookComponent.prototype.ngOnInit = function () {
        this.getBookData();
        this.CreateNewBook = this.formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // Author:['',Validators.required],
            // PublishingYear:['',Validators.required],
            ISBNNumber: this.formBuilder.array([
                this.AddISBN()
            ])
        });
        this.AddToExistingBooks = this.formBuilder.group({
            //// book:['',Validators.required],
            //// Id:['',Validators.required],
            ISBNNumber: this.formBuilder.array([
                this.AddISBN()
            ])
        });
    };
    CreateBookComponent.prototype.ngAfterViewInit = function () {
    };
    CreateBookComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    CreateBookComponent.prototype.AddISBN = function () {
        return this.formBuilder.group({
            TrackNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Edition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PublishingYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateBookComponent.prototype.onSubmit = function () {
        if (this.stopSubmitOnClose) {
            this.stopSubmitOnClose = false;
            return;
        }
        this.submit = true;
        this.bookService.postBook(this.CreateNewBook.value, this.fileToUpload).subscribe(function (data) {
            if (data) {
                console.log('add success');
            }
        }, function (error) {
            console.log('Error', error);
        });
    };
    CreateBookComponent.prototype.onExistingSubmit = function () {
        if (this.stopSubmitOnClose) {
            this.stopSubmitOnClose = false;
            return;
        }
        console.log(this.selectedBook);
        this.bookService.postExistingBook(this.AddToExistingBooks.value, this.selectedBook).subscribe(function (data) {
            if (data) {
                console.log('add success');
                //// this.dialogRef.close();
            }
        });
    };
    CreateBookComponent.prototype.initializeCreateNewBook = function () {
        this.CreateNewBook.setValue({
            Name: '',
            // Author: '',
            ISBNNumber: [{ 'TrackNo': '', 'Edition': '', 'Author': '', 'PublishingYear': '', 'Description': '' }],
        });
    };
    CreateBookComponent.prototype.initializeAddToExistingBooksGroup = function () {
        this.AddToExistingBooks.setValue({
            //// book: '',
            //// Id: '',
            ISBNNumber: [{ 'TrackNo': '', 'Edition': '', 'Author': '', 'PublishingYear': '', 'Description': '' }],
        });
    };
    CreateBookComponent.prototype.onClose = function () {
        this.stopSubmitOnClose = true;
        if (this.isNewBookAdded) {
            this.CreateNewBook.reset();
            this.initializeCreateNewBook();
            //// this.dialogRef.close();
        }
        else if (this.isIncreasedBooks) {
            this.AddToExistingBooks.reset();
            this.initializeAddToExistingBooksGroup();
            //// this.dialogRef.close();
        }
    };
    CreateBookComponent.prototype.AddNew = function () {
        this.isNewBookAdded = true;
        this.isIncreasedBooks = false;
        this.ngOnInit();
    };
    CreateBookComponent.prototype.AddExisting = function () {
        console.log(this.books);
        this.isNewBookAdded = false;
        this.isIncreasedBooks = true;
    };
    CreateBookComponent.prototype.LoginPage = function () {
        this.router.navigate(['/login']);
    };
    CreateBookComponent.prototype.uploadImage = function (event) {
        var _this = this;
        this.isImageUploaded = true;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        console.log(event);
    };
    CreateBookComponent.prototype.filterBanks = function () {
        if (!this.books) {
            return;
        }
        // get the search keyword
        var search = this.bankFilterCtrl.value;
        if (!search) {
            this.filteredBanks.next(this.books.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredBanks.next(this.books.filter(function (book) { return book.Name.toLowerCase().indexOf(search) > -1; }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelect"])
    ], CreateBookComponent.prototype, "singleSelect", void 0);
    CreateBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./createbook.component.html */ "./src/app/layout/createbook/createbook.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_0__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./createbook.component.scss */ "./src/app/layout/createbook/createbook.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]])
    ], CreateBookComponent);
    return CreateBookComponent;
}());



/***/ }),

/***/ "./src/app/layout/createbook/createbook.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/createbook/createbook.module.ts ***!
  \********************************************************/
/*! exports provided: CreateBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookModule", function() { return CreateBookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _createbook_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createbook-routing.module */ "./src/app/layout/createbook/createbook-routing.module.ts");
/* harmony import */ var _createbook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createbook.component */ "./src/app/layout/createbook/createbook.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/book.service */ "./src/app/shared/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CreateBookModule = /** @class */ (function () {
    function CreateBookModule() {
    }
    CreateBookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _createbook_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreatBookRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__["NgxMatSelectSearchModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]],
            declarations: [_createbook_component__WEBPACK_IMPORTED_MODULE_4__["CreateBookComponent"]],
            providers: [src_app_shared_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"]]
        })
    ], CreateBookModule);
    return CreateBookModule;
}());



/***/ })

}]);
//# sourceMappingURL=createbook-createbook-module.js.map