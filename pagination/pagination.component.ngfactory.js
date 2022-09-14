/*!
 *
 * carbon-angular v0.0.0 | pagination.component.ngfactory.js
 *
 * Copyright 2014, 2019 IBM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../i18n/replace.pipe";
import * as i4 from "./pagination.component";
import * as i5 from "../i18n/i18n.service";
import * as i6 from "../experimental.service";
var styles_Pagination = [];
var RenderType_Pagination = i0.ɵcrt({ encapsulation: 2, styles: styles_Pagination, data: {} });
export { RenderType_Pagination as RenderType_Pagination };
function View_Pagination_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "bx--pagination__left"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "p", [["class", "bx--skeleton__text"], ["style", "width: 70px"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "p", [["class", "bx--skeleton__text"], ["style", "width: 35px"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 0, "p", [["class", "bx--skeleton__text"], ["style", "width: 105px"]], null, null, null, null, null))], null, null); }
function View_Pagination_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "span", [["class", "bx--pagination__text"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 1, 0, i0.ɵnov(_v, 2).transform(_co.itemsPerPageText)); _ck(_v, 1, 0, currVal_0); }); }
function View_Pagination_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "label", [["class", "bx--pagination__text"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.itemsPerPageSelectId; _ck(_v, 0, 0, currVal_0); var currVal_1 = i0.ɵunv(_v, 1, 0, i0.ɵnov(_v, 2).transform(_co.itemsPerPageText)); _ck(_v, 1, 0, currVal_1); }); }
function View_Pagination_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, ":svg:svg", [["class", "bx--select__arrow"], ["fill-rule", "evenodd"], ["height", "5"], ["role", "img"], ["viewBox", "0 0 10 5"], ["width", "10"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(2, 0, null, null, 2, ":svg:title", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M0 0l5 4.998L10 0z"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 1).transform(_co.optionsListText)); _ck(_v, 0, 0, currVal_0); var currVal_1 = i0.ɵunv(_v, 3, 0, i0.ɵnov(_v, 4).transform(_co.optionsListText)); _ck(_v, 3, 0, currVal_1); }); }
function View_Pagination_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, ":svg:svg", [["class", "bx--select__arrow"], ["focusable", "false"], ["height", "6"], ["preserveAspectRatio", "xMidYMid meet"], ["role", "img"], ["style", "will-change: transform;"], ["viewBox", "0 0 10 6"], ["width", "10"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(2, 0, null, null, 2, ":svg:title", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M5 6L0 1 .7.3 5 4.6 9.3.3l.7.7z"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 1).transform(_co.optionsListText)); _ck(_v, 0, 0, currVal_0); var currVal_1 = i0.ɵunv(_v, 3, 0, i0.ɵnov(_v, 4).transform(_co.optionsListText)); _ck(_v, 3, 0, currVal_1); }); }
function View_Pagination_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["|\u00A0"]))], null, null); }
function View_Pagination_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 48, "div", [["class", "bx--pagination__left"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_3)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_4)), i0.ɵdid(4, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 36, "div", [["class", "bx--form-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 35, "div", [["class", "bx--select bx--select--inline"]], null, null, null, null, null)), i0.ɵdid(7, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(8, { "bx--select__item-count": 0 }), (_l()(), i0.ɵeld(9, 0, null, null, 2, "label", [["class", "bx--label bx--visually-hidden"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵted(10, null, [" ", " "])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(12, 0, null, null, 25, "select", [["aria-describedby", "false"], ["class", "bx--select-input"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (i0.ɵnov(_v, 13).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 13).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.itemsPerPage = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(13, 16384, null, 0, i2.SelectControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SelectControlValueAccessor]), i0.ɵdid(15, 671744, null, 0, i2.NgModel, [[8, null], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(17, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i0.ɵeld(18, 0, null, null, 3, "option", [["class", "bx--select-option"], ["value", "10"]], null, null, null, null, null)), i0.ɵdid(19, 147456, null, 0, i2.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, "value"] }, null), i0.ɵdid(20, 147456, null, 0, i2.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["10"])), (_l()(), i0.ɵeld(22, 0, null, null, 3, "option", [["class", "bx--select-option"], ["value", "20"]], null, null, null, null, null)), i0.ɵdid(23, 147456, null, 0, i2.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, "value"] }, null), i0.ɵdid(24, 147456, null, 0, i2.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["20"])), (_l()(), i0.ɵeld(26, 0, null, null, 3, "option", [["class", "bx--select-option"], ["value", "30"]], null, null, null, null, null)), i0.ɵdid(27, 147456, null, 0, i2.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, "value"] }, null), i0.ɵdid(28, 147456, null, 0, i2.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["30"])), (_l()(), i0.ɵeld(30, 0, null, null, 3, "option", [["class", "bx--select-option"], ["value", "40"]], null, null, null, null, null)), i0.ɵdid(31, 147456, null, 0, i2.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, "value"] }, null), i0.ɵdid(32, 147456, null, 0, i2.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["40"])), (_l()(), i0.ɵeld(34, 0, null, null, 3, "option", [["class", "bx--select-option"], ["value", "50"]], null, null, null, null, null)), i0.ɵdid(35, 147456, null, 0, i2.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, "value"] }, null), i0.ɵdid(36, 147456, null, 0, i2.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(-1, null, ["50"])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_5)), i0.ɵdid(39, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_6)), i0.ɵdid(41, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(42, 0, null, null, 6, "span", [["class", "bx--pagination__text"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_7)), i0.ɵdid(44, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(45, null, [" ", " "])), i0.ɵpod(46, { start: 0, end: 1, total: 2 }), i0.ɵppd(47, 2), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isExperimental; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.isExperimental; _ck(_v, 4, 0, currVal_1); var currVal_2 = "bx--select bx--select--inline"; var currVal_3 = _ck(_v, 8, 0, _co.isExperimental); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_14 = _co.itemsPerPage; _ck(_v, 15, 0, currVal_14); var currVal_15 = "10"; _ck(_v, 19, 0, currVal_15); var currVal_16 = "10"; _ck(_v, 20, 0, currVal_16); var currVal_17 = "20"; _ck(_v, 23, 0, currVal_17); var currVal_18 = "20"; _ck(_v, 24, 0, currVal_18); var currVal_19 = "30"; _ck(_v, 27, 0, currVal_19); var currVal_20 = "30"; _ck(_v, 28, 0, currVal_20); var currVal_21 = "40"; _ck(_v, 31, 0, currVal_21); var currVal_22 = "40"; _ck(_v, 32, 0, currVal_22); var currVal_23 = "50"; _ck(_v, 35, 0, currVal_23); var currVal_24 = "50"; _ck(_v, 36, 0, currVal_24); var currVal_25 = !_co.isExperimental; _ck(_v, 39, 0, currVal_25); var currVal_26 = _co.isExperimental; _ck(_v, 41, 0, currVal_26); var currVal_27 = !_co.isExperimental; _ck(_v, 44, 0, currVal_27); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.itemsPerPageSelectId; _ck(_v, 9, 0, currVal_4); var currVal_5 = i0.ɵunv(_v, 10, 0, i0.ɵnov(_v, 11).transform(_co.itemsPerPageText)); _ck(_v, 10, 0, currVal_5); var currVal_6 = _co.itemsPerPageSelectId; var currVal_7 = i0.ɵnov(_v, 17).ngClassUntouched; var currVal_8 = i0.ɵnov(_v, 17).ngClassTouched; var currVal_9 = i0.ɵnov(_v, 17).ngClassPristine; var currVal_10 = i0.ɵnov(_v, 17).ngClassDirty; var currVal_11 = i0.ɵnov(_v, 17).ngClassValid; var currVal_12 = i0.ɵnov(_v, 17).ngClassInvalid; var currVal_13 = i0.ɵnov(_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_28 = i0.ɵunv(_v, 45, 0, i0.ɵnov(_v, 48).transform(i0.ɵunv(_v, 45, 0, _ck(_v, 47, 0, i0.ɵnov(_v.parent, 0), _co.totalItemsText, _ck(_v, 46, 0, _co.startItemIndex, _co.endItemIndex, _co.model.totalDataLength))))); _ck(_v, 45, 0, currVal_28); }); }
function View_Pagination_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "bx--pagination__right bx--pagination--inline"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "p", [["class", "bx--skeleton__text"], ["style", "width: 70px"]], null, null, null, null, null))], null, null); }
function View_Pagination_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "span", [["class", "bx--pagination__text"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "])), i0.ɵpod(2, { current: 0, last: 1 }), i0.ɵppd(3, 2), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 1, 0, i0.ɵnov(_v, 4).transform(i0.ɵunv(_v, 1, 0, _ck(_v, 3, 0, i0.ɵnov(_v.parent.parent, 0), _co.totalPagesText, _ck(_v, 2, 0, _co.currentPage, _co.lastPage))))); _ck(_v, 1, 0, currVal_0); }); }
function View_Pagination_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "button", [["class", "bx--pagination__button bx--pagination__button--backward"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectPage.emit(_co.previousPage) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--pagination__button--no-index": 0 }), (_l()(), i0.ɵeld(3, 0, null, null, 5, ":svg:svg", [["class", "bx--pagination__button-icon"], ["fill-rule", "evenodd"], ["height", "12"], ["role", "img"], ["viewBox", "0 0 7 12"], ["width", "7"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(5, 0, null, null, 2, ":svg:title", [], null, null, null, null, null)), (_l()(), i0.ɵted(6, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(8, 0, null, null, 0, ":svg:path", [["d", "M1.45 6.002L7 11.27l-.685.726L0 6.003 6.315 0 7 .726z"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "bx--pagination__button bx--pagination__button--backward"; var currVal_2 = _ck(_v, 2, 0, (_co.currentPage <= 1)); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.currentPage <= 1) ? true : null); _ck(_v, 0, 0, currVal_0); var currVal_3 = i0.ɵunv(_v, 3, 0, i0.ɵnov(_v, 4).transform(_co.backwardText)); _ck(_v, 3, 0, currVal_3); var currVal_4 = i0.ɵunv(_v, 6, 0, i0.ɵnov(_v, 7).transform(_co.backwardText)); _ck(_v, 6, 0, currVal_4); }); }
function View_Pagination_12(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "option", [["class", "bx--select-option"]], null, null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i2.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, "value"] }, null), i0.ɵdid(2, 147456, null, 0, i2.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }); }
function View_Pagination_13(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, ":svg:svg", [["class", "bx--select__arrow"], ["fill-rule", "evenodd"], ["height", "5"], ["role", "img"], ["viewBox", "0 0 10 5"], ["width", "10"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(2, 0, null, null, 2, ":svg:title", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M0 0l5 4.998L10 0z"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 1).transform(_co.optionsListText)); _ck(_v, 0, 0, currVal_0); var currVal_1 = i0.ɵunv(_v, 3, 0, i0.ɵnov(_v, 4).transform(_co.optionsListText)); _ck(_v, 3, 0, currVal_1); }); }
function View_Pagination_14(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, ":svg:svg", [["class", "bx--select__arrow"], ["focusable", "false"], ["height", "6"], ["preserveAspectRatio", "xMidYMid meet"], ["role", "img"], ["style", "will-change: transform;"], ["viewBox", "0 0 10 6"], ["width", "10"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(2, 0, null, null, 2, ":svg:title", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M5 6L0 1 .7.3 5 4.6 9.3.3l.7.7z"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 1).transform(_co.optionsListText)); _ck(_v, 0, 0, currVal_0); var currVal_1 = i0.ɵunv(_v, 3, 0, i0.ɵnov(_v, 4).transform(_co.optionsListText)); _ck(_v, 3, 0, currVal_1); }); }
function View_Pagination_15(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "span", [["class", "bx--pagination__text"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "])), i0.ɵpod(2, { last: 0 }), i0.ɵppd(3, 2), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 1, 0, i0.ɵnov(_v, 4).transform(i0.ɵunv(_v, 1, 0, _ck(_v, 3, 0, i0.ɵnov(_v.parent.parent, 0), _co.ofLastPagesText, _ck(_v, 2, 0, _co.lastPage))))); _ck(_v, 1, 0, currVal_0); }); }
function View_Pagination_16(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "button", [["class", "bx--pagination__button bx--pagination__button--forward"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectPage.emit(_co.nextPage) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--pagination__button--no-index": 0 }), (_l()(), i0.ɵeld(3, 0, null, null, 5, ":svg:svg", [["class", "bx--pagination__button-icon"], ["fill-rule", "evenodd"], ["height", "12"], ["role", "img"], ["viewBox", "0 0 7 12"], ["width", "7"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(5, 0, null, null, 2, ":svg:title", [], null, null, null, null, null)), (_l()(), i0.ɵted(6, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(8, 0, null, null, 0, ":svg:path", [["d", "M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "bx--pagination__button bx--pagination__button--forward"; var currVal_2 = _ck(_v, 2, 0, (_co.currentPage >= _co.lastPage)); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.currentPage >= _co.lastPage) ? true : null); _ck(_v, 0, 0, currVal_0); var currVal_3 = i0.ɵunv(_v, 3, 0, i0.ɵnov(_v, 4).transform(_co.forwardText)); _ck(_v, 3, 0, currVal_3); var currVal_4 = i0.ɵunv(_v, 6, 0, i0.ɵnov(_v, 7).transform(_co.forwardText)); _ck(_v, 6, 0, currVal_4); }); }
function View_Pagination_17(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "button", [["class", "bx--pagination__button bx--pagination__button--backward"], ["tabindex", "0"]], [[1, "aria-label", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectPage.emit(_co.previousPage) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--pagination__button--no-index": 0 }), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(4, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["class", "bx--pagination__nav-arrow"], ["focusable", "false"], ["height", "24"], ["preserveAspectRatio", "xMidYMid meet"], ["style", "will-change: transform;"], ["viewBox", "0 0 32 32"], ["width", "24"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M19 23l-8-7 8-7v14z"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "bx--pagination__button bx--pagination__button--backward"; var currVal_3 = _ck(_v, 2, 0, (_co.currentPage <= 1)); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 3).transform(_co.backwardText)); var currVal_1 = ((_co.currentPage <= 1) ? true : null); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_Pagination_18(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "button", [["class", "bx--pagination__button bx--pagination__button--forward"], ["tabindex", "0"]], [[1, "aria-label", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectPage.emit(_co.nextPage) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--pagination__button--no-index": 0 }), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(4, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["class", "bx--pagination__nav-arrow"], ["focusable", "false"], ["height", "24"], ["preserveAspectRatio", "xMidYMid meet"], ["style", "will-change: transform;"], ["viewBox", "0 0 32 32"], ["width", "24"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M13 9l8 7-8 7V9z"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "bx--pagination__button bx--pagination__button--forward"; var currVal_3 = _ck(_v, 2, 0, (_co.currentPage >= _co.lastPage)); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 3).transform(_co.forwardText)); var currVal_1 = ((_co.currentPage >= _co.lastPage) ? true : null); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_Pagination_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 33, "div", [["class", "bx--pagination__right"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--pagination--inline": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_10)), i0.ɵdid(4, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_11)), i0.ɵdid(6, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(7, 0, null, null, 18, "div", [["class", "bx--form-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 17, "div", [["class", "bx--select bx--select--inline"]], null, null, null, null, null)), i0.ɵdid(9, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(10, { "bx--select__page-number": 0 }), (_l()(), i0.ɵeld(11, 0, null, null, 2, "label", [["class", "bx--label bx--visually-hidden"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵted(12, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(14, 0, null, null, 7, "select", [["aria-describedby", "false"], ["class", "bx--select-input"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (i0.ɵnov(_v, 15).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 15).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.currentPage = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(15, 16384, null, 0, i2.SelectControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.SelectControlValueAccessor]), i0.ɵdid(17, 671744, null, 0, i2.NgModel, [[8, null], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(19, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_12)), i0.ɵdid(21, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_13)), i0.ɵdid(23, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_14)), i0.ɵdid(25, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_15)), i0.ɵdid(27, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_16)), i0.ɵdid(29, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_17)), i0.ɵdid(31, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_18)), i0.ɵdid(33, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bx--pagination__right"; var currVal_1 = _ck(_v, 2, 0, !_co.isExperimental); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = !_co.isExperimental; _ck(_v, 4, 0, currVal_2); var currVal_3 = !_co.isExperimental; _ck(_v, 6, 0, currVal_3); var currVal_4 = "bx--select bx--select--inline"; var currVal_5 = _ck(_v, 10, 0, _co.isExperimental); _ck(_v, 9, 0, currVal_4, currVal_5); var currVal_16 = _co.currentPage; _ck(_v, 17, 0, currVal_16); var currVal_17 = _co.range((_co.lastPage + 1), 1); _ck(_v, 21, 0, currVal_17); var currVal_18 = !_co.isExperimental; _ck(_v, 23, 0, currVal_18); var currVal_19 = _co.isExperimental; _ck(_v, 25, 0, currVal_19); var currVal_20 = _co.isExperimental; _ck(_v, 27, 0, currVal_20); var currVal_21 = !_co.isExperimental; _ck(_v, 29, 0, currVal_21); var currVal_22 = _co.isExperimental; _ck(_v, 31, 0, currVal_22); var currVal_23 = _co.isExperimental; _ck(_v, 33, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.currentPageSelectId; _ck(_v, 11, 0, currVal_6); var currVal_7 = i0.ɵunv(_v, 12, 0, i0.ɵnov(_v, 13).transform(_co.itemsPerPageText)); _ck(_v, 12, 0, currVal_7); var currVal_8 = _co.currentPageSelectId; var currVal_9 = i0.ɵnov(_v, 19).ngClassUntouched; var currVal_10 = i0.ɵnov(_v, 19).ngClassTouched; var currVal_11 = i0.ɵnov(_v, 19).ngClassPristine; var currVal_12 = i0.ɵnov(_v, 19).ngClassDirty; var currVal_13 = i0.ɵnov(_v, 19).ngClassValid; var currVal_14 = i0.ɵnov(_v, 19).ngClassInvalid; var currVal_15 = i0.ɵnov(_v, 19).ngClassPending; _ck(_v, 14, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }); }
export function View_Pagination_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i3.ReplacePipe, []), (_l()(), i0.ɵeld(1, 0, null, null, 10, "div", [["class", "bx--pagination"]], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "bx--skeleton": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_1)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_2)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_8)), i0.ɵdid(9, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Pagination_9)), i0.ɵdid(11, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bx--pagination"; var currVal_1 = _ck(_v, 3, 0, _co.skeleton); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.skeleton; _ck(_v, 5, 0, currVal_2); var currVal_3 = !_co.skeleton; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.skeleton; _ck(_v, 9, 0, currVal_4); var currVal_5 = !_co.skeleton; _ck(_v, 11, 0, currVal_5); }, null); }
export function View_Pagination_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-pagination", [], null, null, null, View_Pagination_0, RenderType_Pagination)), i0.ɵdid(1, 49152, null, 0, i4.Pagination, [i5.I18n, i6.ExperimentalService], null, null)], null, null); }
var PaginationNgFactory = i0.ɵccf("ibm-pagination", i4.Pagination, View_Pagination_Host_0, { skeleton: "skeleton", model: "model", translations: "translations" }, { selectPage: "selectPage" }, []);
export { PaginationNgFactory as PaginationNgFactory };
//# sourceMappingURL=pagination.component.ngfactory.js.map