import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PoiModalComponent } from '../components/poi-modal/poi-modal.component';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	categories = [
		[
			{ name: 'Digital Entertainment', imgUrl: '../../assets/avatar-vg.jpg' },
			{ name: 'Gambling', imgUrl: '../../assets/avatar-casino.jpg' }
		],
		[{ name: 'Nature & Outdoor Sites', imgUrl: '../../assets/avatar-park.jpg' }, { name: 'Test1', imgUrl: '' }],
		[{ name: 'Test2', imgUrl: '' }, { name: 'Test3', imgUrl: '' }]
	];

	constructor(public modalController: ModalController) {}

	async presentModal(name) {
		const modal = await this.modalController.create({
			component: PoiModalComponent,
			componentProps: { name: name, modalController: this.modalController }
		});
		return await modal.present();
	}
}
