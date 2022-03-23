import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  //define loadedPlaces, which is a Place type; [] for loading all places
  loadedPlaces: Place []; 
  //register service file in the constructor; //local name : PlaceService (which is defined)
  constructor(private placeService: PlaceService) {} 
  ngOnInit() {
    this.loadedPlaces = this.placeService.places; 
    console.log(this.loadedPlaces);
  }
  ionViewWillEnter(){
    this.loadedPlaces = this.placeService.places;// to refresh after new offers submitted on discover 
  }
}


