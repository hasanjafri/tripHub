import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PoiModalComponent } from '../poi-modal/poi-modal.component';

@Component({
	selector: 'app-poi-list-modal',
	templateUrl: './poi-list-modal.component.html',
	styleUrls: ['./poi-list-modal.component.scss']
})
export class PoiListModalComponent {
	@Input() name: string;
	@Input() modalController: ModalController;

	constructor(public mdlController: ModalController) {}

	dismiss() {
		this.modalController.dismiss();
	}

	async presentModal() {
		const modal = await this.mdlController.create({
			component: PoiModalComponent,
			componentProps: { name: this.name, modalController: this.mdlController }
		});
		return await modal.present();
	}
}
