import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
	preferencesList = [
		{
			title: 'Digital Entertainment',
			subtitle: 'Video Games, VR Arcades and more!',
			imgUrl: '../../assets/avatar-vg.jpg',
			checked: false
		},
		{
			title: 'Gambling',
			subtitle: 'Casinos and other gambling sites!',
			imgUrl: '../../assets/avatar-casino.jpg',
			checked: false
		},
		{
			title: 'Nature & Outdoor Sites',
			subtitle: 'Parks and Recreational Sites',
			imgUrl: '../../assets/avatar-park.jpg',
			checked: false
		}
	];

	constructor(private storage: Storage) {}

	async ngOnInit() {
		for (const preference of this.preferencesList) {
			const existingPrefValue = await this.storage.get(preference.title);
			if (existingPrefValue) {
				preference.checked = existingPrefValue;
			} else if (existingPrefValue === null) {
				this.storage.set(preference.title, preference.checked);
			}
		}
	}

	onCheckboxClick(checkbox, index) {
		this.storage.set(this.preferencesList[index].title, checkbox.detail.checked);
		this.storage.get(this.preferencesList[index].title).then((x) => {
			console.log(x);
		});
	}
}
