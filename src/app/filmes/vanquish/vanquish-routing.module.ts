import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VanquishPage } from './vanquish.page';

const routes: Routes = [
  {
    path: '',
    component: VanquishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VanquishPageRoutingModule {}
