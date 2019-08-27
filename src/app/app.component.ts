import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Environment } from '@ionic-native/google-maps';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			Environment.setEnv({
				API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCzaAx4Ik_CNLu5loZhHdq422ObnlzeJn0',
				API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCzaAx4Ik_CNLu5loZhHdq422ObnlzeJn0'
			});
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
