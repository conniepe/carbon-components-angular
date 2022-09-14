/*!
 *
 * carbon-angular v0.0.0 | switch.component.ngfactory.js
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
import * as i3 from "./switch.component";
var styles_Switch = [];
var RenderType_Switch = i0.ɵcrt({ encapsulation: 2, styles: styles_Switch, data: {} });
export { RenderType_Switch as RenderType_Switch };
function View_Switch_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "label", [["class", "bx--toggle__label"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "bx--toggle__text--left"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Off"])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "bx--toggle__appearance"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["class", "bx--toggle__text--right"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["On"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); }); }
function View_Switch_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "label", [["class", "bx--toggle__label"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "span", [["class", "bx--toggle__appearance"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 1, ":svg:svg", [["class", "bx--toggle__check"], ["height", "5px"], ["viewBox", "0 0 6 5"], ["width", "6px"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 0, ":svg:path", [["d", "M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); }); }
export function View_Switch_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { inputCheckbox: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 2, "input", [["class", "bx--toggle"], ["type", "checkbox"]], [[8, "id", 0], [8, "value", 0], [8, "name", 0], [8, "required", 0], [8, "checked", 0], [8, "disabled", 0], [1, "aria-checked", 0]], [[null, "change"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onChange($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "bx--toggle--small": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Switch_1)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Switch_2)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = "bx--toggle"; var currVal_8 = _ck(_v, 3, 0, (_co.size === "sm")); _ck(_v, 2, 0, currVal_7, currVal_8); var currVal_9 = (_co.size === "md"); _ck(_v, 5, 0, currVal_9); var currVal_10 = (_co.size === "sm"); _ck(_v, 7, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co.value; var currVal_2 = _co.name; var currVal_3 = _co.required; var currVal_4 = _co.checked; var currVal_5 = _co.disabled; var currVal_6 = _co.checked; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
export function View_Switch_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-switch", [], [[2, "bx--checkbox-wrapper", null], [2, "bx--form-item", null]], null, null, View_Switch_0, RenderType_Switch)), i0.ɵprd(5120, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.Switch]), i0.ɵdid(2, 4243456, null, 0, i3.Switch, [i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).checkboxWrapperClass; var currVal_1 = i0.ɵnov(_v, 2).formItemClass; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var SwitchNgFactory = i0.ɵccf("ibm-switch", i3.Switch, View_Switch_Host_0, { size: "size", nested: "nested", inline: "inline", disabled: "disabled", skeleton: "skeleton", name: "name", id: "id", required: "required", value: "value", ariaLabel: "aria-label", ariaLabelledby: "aria-labelledby", indeterminate: "indeterminate", checked: "checked" }, { change: "change", indeterminateChange: "indeterminateChange" }, []);
export { SwitchNgFactory as SwitchNgFactory };
//# sourceMappingURL=switch.component.ngfactory.js.map