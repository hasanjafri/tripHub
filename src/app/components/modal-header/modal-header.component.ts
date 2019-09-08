import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-modal-header',
	templateUrl: './modal-header.component.html',
	styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
	@Input() title: string;
	@Output() closeEmitter = new EventEmitter<boolean>();

	dismiss() {
		this.closeEmitter.emit(true);
	}
}
