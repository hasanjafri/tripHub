import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabHeaderComponent } from '../components/tab-header/tab-header.component';
import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';

@NgModule({
	imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
	declarations: [TabsPage, TabHeaderComponent],
	exports: [TabHeaderComponent]
})
export class TabsPageModule {}
