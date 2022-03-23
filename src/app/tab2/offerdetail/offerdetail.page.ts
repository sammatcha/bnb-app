import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/tab1/place.model';
import { PlaceService } from 'src/app/tab1/place.service';

@Component({
  selector: 'app-offerdetail',
  templateUrl: './offerdetail.page.html',
  styleUrls: ['./offerdetail.page.scss'],
})
export class OfferdetailPage implements OnInit {
  //define variables
  place: Place;
  id: string;
  //inject two packages: ActivatedRoute & service file that was created
  constructor(private route: ActivatedRoute,
    private placeService: PlaceService) { }

  ngOnInit() {
    //retrieve id from navigation             //match variable name from routing-module
    this.id = this.route.snapshot.paramMap.get('placeId');
    this.place = this.placeService.getPlace(this.id);
                                    //newly defined in place.service.ts
  console.log(this.place);
  //go to offerdetail.html
  }

}
