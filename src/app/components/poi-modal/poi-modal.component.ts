import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-poi-modal',
	templateUrl: './poi-modal.component.html',
	styleUrls: ['./poi-modal.component.scss']
})
export class PoiModalComponent {
	@Input() name: string;
	@Input() modalController: ModalController;

	dismiss() {
		this.modalController.dismiss();
	}
}
