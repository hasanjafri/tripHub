import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { PoiListModalComponent } from './components/poi-list-modal/poi-list-modal.component';
import { PoiModalComponent } from './components/poi-modal/poi-modal.component';

@NgModule({
	declarations: [AppComponent, PoiModalComponent, PoiListModalComponent, ModalHeaderComponent],
	entryComponents: [PoiModalComponent, PoiListModalComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		IonicStorageModule.forRoot({ name: 'user-preferences', driverOrder: ['localstorage', 'sqlite', 'indexeddb', 'websql'] })
	],
	providers: [StatusBar, SplashScreen, Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent]
})
export class AppModule {}
