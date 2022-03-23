import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
        // created data array: _places; Place[] means each place has 5 attributes
  private _places: Place[] = [
    // 3 initial values for 3 Places: new Place ; array, each Place has 5 attributes
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      '../assets/imgs/nyc.jpeg',
      149.99,
      //added two new attributes
      //method, Date, to convert text strings to a date
      new Date( '2020-01-01'),
      new Date( '2020-12-31')
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      '../assets/imgs/paris.jpeg',
      189.99,
      new Date( '2020-01-01'),
      new Date( '2020-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      '../assets/imgs/sanf.jpeg',
      99.99,
      new Date( '2020-01-01'),
      new Date( '2020-12-31')
    ),
  ];
  // method to retrieve all places from data array
  //data array: _places
  get places() {
    return [...this._places];
  }//go to tab2.page.ts(1)

  //new function to retrieve place information by Id: bnb3
  getPlace (id: string) {
    return{...this._places.find(p => p.id === id)};
    //go to offerdetail.ts
  }
  //method to add new place (bnb4)
  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date){
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      '../assets/imgs/nyc.jpeg',
      price,
      dateFrom,
      dateTo,
    );
    //bnb4: push elements of newPlace into data array
    this._places.push(newPlace);
    //go to newoffer.ts 
  }

//bnb5 update exisiting offers
updateOffer(placeId: string, 
  title: string, 
  description: string, 
  price: number, 
  dateFrom: Date, 
  dateTo: Date ) {
    const updatedPlaceIndex = this._places.findIndex(p1 => p1.id ===placeId);
    const oldPlace = this._places[updatedPlaceIndex];
    this._places[updatedPlaceIndex] = new Place( //updating info after getting index from old place info
    oldPlace.id,
    title,
    description,
    oldPlace.image,
    price,
    dateFrom,
    dateTo
    );
  }
  //RemoveOffer: bnb7
  RemoveOffer(id:string) {
    const position = this._places.findIndex(p => p.id ===id);
    this._places.splice(position,1);
  }
  
  constructor() { }
}

