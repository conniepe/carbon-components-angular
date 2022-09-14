/*!
 *
 * carbon-angular v0.0.0 | calendar.module.js
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


import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Calendar } from "./calendar.component";
import { IconModule, StaticIconModule } from "./../icon/icon.module";
import { CalendarMonth } from "./month-view/calendar-month.component";
import { CalendarMonths } from "./months-view/calendar-months.component";
import { CalendarQuarter } from "./quarter-view/calendar-quarter.component";
import { CalendarYear } from "./year-view/calendar-year.component";
import { CalendarHeader } from "./calendar-header.component";
export { DateTimeModel } from "./date-time-model.class";
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Calendar,
                        CalendarMonth,
                        CalendarMonths,
                        CalendarQuarter,
                        CalendarYear,
                        CalendarHeader
                    ],
                    exports: [
                        Calendar,
                        CalendarMonth,
                        CalendarMonths,
                        CalendarQuarter,
                        CalendarYear,
                        CalendarHeader
                    ],
                    imports: [
                        CommonModule,
                        IconModule,
                        StaticIconModule
                    ]
                },] },
    ];
    return CalendarModule;
}());
export { CalendarModule };
//# sourceMappingURL=calendar.module.js.map