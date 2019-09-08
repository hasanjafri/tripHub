import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMap, GoogleMaps, GoogleMapsAnimation, GoogleMapsEvent, Marker, MyLocation } from '@ionic-native/google-maps';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
	map: GoogleMap;
	address: string;
	preferences = new Object();

	constructor(private geolocation: Geolocation, public toastCtrl: ToastController, private platform: Platform, private storage: Storage) {}

	ngOnInit() {
		this.platform.ready();
		this.loadMap();
	}

	ionViewWillEnter() {
		this.storage
			.forEach((val, key) => {
				this.preferences[key] = val;
			})
			.finally(() => {
				console.log(this.preferences);
			});
	}

	loadMap() {
		this.map = GoogleMaps.create('map_canvas', {
			// camera: {
			//   target: {
			//     lat: 43.0741704,
			//     lng: -89.3809802
			//   },
			//   zoom: 18,
			//   tilt: 30
			// }
		});
		this.goToMyLocation();
	}

	goToMyLocation() {
		this.map.clear();

		// Get the location of you
		this.map
			.getMyLocation()
			.then((location: MyLocation) => {
				console.log(JSON.stringify(location, null, 2));

				// Move the map camera to the location with animation
				this.map.animateCamera({
					target: location.latLng,
					zoom: 17,
					duration: 5000
				});

				// add a marker
				const marker: Marker = this.map.addMarkerSync({
					title: '@ionic-native/google-maps plugin!',
					snippet: 'This plugin is awesome!',
					position: location.latLng,
					animation: GoogleMapsAnimation.BOUNCE
				});

				// show the infoWindow
				marker.showInfoWindow();

				// If clicked it, display the alert
				marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
					this.showToast('clicked!');
				});

				this.map.on(GoogleMapsEvent.MAP_READY).subscribe((data) => {
					console.log('Click MAP', data);
				});
			})
			.catch((err) => {
				// this.loading.dismiss();
				this.showToast(err.error_message);
			});
	}

	async showToast(message: string) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2000,
			position: 'middle'
		});
		toast.present();
	}

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
