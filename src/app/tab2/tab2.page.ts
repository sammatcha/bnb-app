import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Place } from '../tab1/place.model';
import { PlaceService } from '../tab1/place.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

//bring in data from service file
export class Tab2Page {
  //local variable, offers, which is a Place type
  offers: Place[];
  //inject service file in constructor, placeservice
  constructor(private placeService: PlaceService,
    private actionSheetController: ActionSheetController,
    private router: Router) {}


  ionViewWillEnter(){
    this.offers = this.placeService.places;
                    //this gets everything in service file
    console.log(this.offers);
  }
async onClickOffer(id: string) {
  const actionSheet = await this.actionSheetController.create({
    header: 'You would like to:',
    buttons:[
      {
        text: 'Remove offer',
        icon:'trash',
        handler: () => {
          this.placeService.RemoveOffer(id);
          this.offers = this.placeService.places;
        }
        },
        {
          text: 'View Detail',
          icon:'eye',
          handler: () => this.router.navigate(['/tabs/tab2/offerdetail/' + id])
          },
          {
            text: 'Edit offer',
            icon:'pencil',
            handler: () => this.router.navigate(['/tabs/tab2/editoffer/' + id])
            },
            {
              text: 'Cancel',
            icon:'close',
            role: 'cancel'
            },
    ]
  });
  await actionSheet.present();
}
}
