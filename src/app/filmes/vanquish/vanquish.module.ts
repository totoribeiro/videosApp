import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VanquishPageRoutingModule } from './vanquish-routing.module';

import { VanquishPage } from './vanquish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VanquishPageRoutingModule
  ],
  declarations: [VanquishPage]
})
export class VanquishPageModule {}
