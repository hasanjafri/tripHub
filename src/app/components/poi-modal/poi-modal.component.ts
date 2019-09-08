import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-poi-modal',
	templateUrl: './poi-modal.component.html',
	styleUrls: ['./poi-modal.component.scss']
})
export class PoiModalComponent {
	@Input() name: string;
}
