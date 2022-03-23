import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferdetailPage } from './offerdetail.page';

const routes: Routes = [
  {
    path: '',
    component: OfferdetailPage
  },//add placeId to pass the id for navigation
  {
    path: ':placeId',
    component: OfferdetailPage
  }
  //go to tab2.html
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferdetailPageRoutingModule {}
