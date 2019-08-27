import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	constructor(private geolocation: Geolocation) {}

	getLocation() {
		this.geolocation
			.getCurrentPosition()
			.then((resp) => {
				console.log(resp.coords.latitude, resp.coords.longitude);
			})
			.catch((error) => {
				console.error('Error getting location', error);
			});
	}
}
