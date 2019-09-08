import { Component } from '@angular/core';

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
}
