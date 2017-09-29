import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";

import { findNextElem, findPrevElem } from "../common/a11y.service";

@Component({
	selector: "n-list-view",
	template: `
		<ul #listView class="list-group" role="group" [attr.aria-multiselectable]= "checkMark ? true : false">
			<li class="list-group_item--has-info">
				<button
				tabindex= "{{item.disabled?-1:0}}"
				*ngFor="let item of items"
				(click)= "doClick($event, item)"
				(keydown)= "doKeyDown($event, item)"
				[attr.role]= "listView.attributes.role ? 'listitem' : null"
				[attr.aria-selected]= "item.selected ? true : false"
				[attr.disabled] = "item.disabled ? 'disabled' : null">
					<span *ngIf="!listTpl">{{item.content}}</span>
					<ng-template
						*ngIf="listTpl"
						[ngOutletContext]="{item: item}"
						[ngTemplateOutlet]="listTpl">
					</ng-template>
				</button>
				</li>
		</ul>
		`,
})
export class ListView {
	@Input() items: Array<Object> = [];
	@Input() listTpl: string | TemplateRef<any> = null;
	@Input() checkMark: Boolean = true;
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

	doKeyDown(ev, item) {
		if (ev.key && (ev.key === "Enter" || ev.key === " ")) {
			ev.preventDefault();
			this.doClick(ev, item);
		} else if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
			if (ev.key === "ArrowDown" && findNextElem(ev.target)) {
				ev.preventDefault();
				findNextElem(ev.target).focus();
			} else if (ev.key === "ArrowUp" && findPrevElem(ev.target)) {
				ev.preventDefault();
				findPrevElem(ev.target).focus();
			}
			if (ev.shiftKey) {
				ev.target.click();
			}
		}
	}

	doClick(ev, item) {
		if (!item.disabled) {
			this.selected.emit({
				item
			});
		}
	}
}
