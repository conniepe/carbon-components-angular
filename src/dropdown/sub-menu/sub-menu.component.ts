import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef,
	ViewChild,
	AfterViewInit
} from "@angular/core";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { ListItem } from "./../list-item.interface";
import { SubMenuItem } from "./sub-menu-item.component";
import { watchFocusJump, treetools } from "./../dropdowntools";

@Component({
	selector: "cdl-dropdown-sub-menu",
	template: `
		<cdl-sub-menu-wrapper
			[items]="items"
			[listTpl]="listTpl"
			[role]="role"
			[label]="label"
			[selectedIcon]="selectedIcon"
			(select)="onClick($event)">
		</cdl-sub-menu-wrapper>
	`,
	host: {
		"class": "sub-menu"
	},
	providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => DropdownSubMenu)}]
})
export class DropdownSubMenu implements AbstractDropdownView {
	@Input() items: Array<ListItem> = [];
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() role: "tree" | "group" = "tree" ;
	@Input() label: string;
	@Input() selectedIcon = false;
	@Input() type: "single" | "multi" = "single";

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	private listList: HTMLElement[];
	private flatList: Array<ListItem> = [];
	private index = -1;
	private focusJump;

	constructor(public _elementRef: ElementRef) {}

	ngOnChanges(changes) {
		if (changes.items) {
			this.items = JSON.parse(JSON.stringify(changes.items.currentValue));
			this.flatList = [];
			this.flattenTree(this.items);
			this.index = this.flatList.findIndex(item => item.selected && !item.items);
			if (this._elementRef) {
				this.listList = this._elementRef.nativeElement.querySelectorAll(".sub-menu-item-wrapper");
			}
			this.setupFocusObservable();
		}
	}

	ngAfterViewInit() {
		this.listList = Array.from(this._elementRef.nativeElement.querySelectorAll(".sub-menu-item-wrapper")) as HTMLElement[];
		this.setupFocusObservable();
	}

	setupFocusObservable() {
		if (this.focusJump) {
			this.focusJump.unsubscribe();
		}
		this.focusJump = watchFocusJump(this._elementRef.nativeElement, this.listList)
			.subscribe(el => {
				let item = this.flatList[this.listList.indexOf(el)];
				treetools.find(this.items, item).path.forEach(i => {
					if (i !== item) { i.selected = true; }
				});
				// wait a tick...
				setTimeout(() => el.focus(), 0);
			});
	}

	flattenTree(items) {
		for (let item of items) {
			this.flatList.push(item);
			if (item.items) {
				this.flattenTree(item.items);
			}
		}
	}

	getNextItem(): ListItem {
		if (this.index < this.flatList.length - 1) {
			this.index++;
		}
		let item = this.flatList[this.index];
		return item;
	}

	getNextElement(): HTMLElement {
		if (this.index < this.flatList.length - 1) {
			this.index++;
		} else {
			return null;
		}
		let elem = this.listList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			if (item.items) { item.selected = true; }
			return this.getNextElement();
		}
		return elem;
	}

	getPrevItem(): ListItem {
		if (this.index > 0) {
			this.index--;
		}
		let item = this.flatList[this.index];
		return item;
	}

	getPrevElement(): HTMLElement {
		if (this.index > 0) {
			this.index--;
		} else {
			return null;
		}
		let elem = this.listList[this.index];
		let item = this.flatList[this.index];
		if (item.disabled || item.items) {
			return this.getPrevElement();
		}
		return elem;
	}

	getSelected(): ListItem[] {
		let selected = this.flatList.filter(item => item.selected && !item.items);
		if (selected.length === 0) {
			return null;
		}
		return selected;
	}

	getCurrentItem(): ListItem {
		if (this.index < 0) {
			return this.flatList[0];
		}
		return this.flatList[this.index];
	}

	getCurrentElement(): HTMLElement {
		if (this.index < 0) {
			return this.listList[0];
		}
		return this.listList[this.index];
	}

	propagateSelected(value: Array<ListItem>): void {
		for (let newItem of value) {
			// copy the item
			let tempNewItem: string | ListItem = Object.assign({}, newItem);
			// deleted selected because it's what we _want_ to change
			delete tempNewItem.selected;
			// stringify for compare
			tempNewItem = JSON.stringify(tempNewItem);
			for (let oldItem of this.flatList) {
				let tempOldItem: string | ListItem = Object.assign({}, oldItem);
				delete tempOldItem.selected;
				tempOldItem = JSON.stringify(tempOldItem);
				// do the compare
				if (tempOldItem.includes(tempNewItem)) {
					// oldItem = Object.assign(oldItem, newItem);
					oldItem.selected = newItem.selected;
				} else {
					oldItem.selected = false;
				}
			}
		}
	}

	// this and a few other functions are super common between
	// submenu and tree ... maybe we can dedupe?
	onClick({item}) {
		item.selected = !item.selected;
		this.index = this.flatList.indexOf(item);
		if (this.type === "single") {
			let {path} = treetools.find(this.items, item);
			// reset the selection taking care not to touch our selected item
			for (let i = 0; i < this.flatList.length; i++) {
				if (path.indexOf(this.flatList[i]) !== -1 && this.flatList[i] !== item) {
					this.flatList[i].selected = true;
				} else if (this.flatList[i] !== item) {
					this.flatList[i].selected = false;
				}
			}
			if (!item.disabled && !item.items) {
				this.select.emit({item});
			}
		} else {
			this.select.emit(this.getSelected());
		}
	}
}
