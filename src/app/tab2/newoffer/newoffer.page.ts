import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/tab1/place.service';

@Component({
  selector: 'app-newoffer',
  templateUrl: './newoffer.page.html',
  styleUrls: ['./newoffer.page.scss'],
})
export class NewofferPage implements OnInit {
  //create new object (local variable named form) by using class, FormGroup
  form:FormGroup
  constructor(private placeService: PlaceService, //after pushing new offers into data array
   private router: Router ) { }

  ngOnInit() {
    //creat new object using class
    //{} to show have object
    this.form = new FormGroup({
      //FormControl is a class and title is object (attribute)
      title: new FormControl(null, {
        //validator methods
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      detail: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      availableFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      availableTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  //bnb4: method to be used in HTML to submit
  onCreateOffer(){
    console.log(this.form); //go to HTML
    this.placeService.addPlace(    //addPlace is new method just added
    this.form.value.title,
    this.form.value.description,
    this.form.value.price,
    new Date(this.form.value.availableFrom),
    new Date(this.form.value.availableTo)
);
this.form.reset(); //to reset form for use next time
this.router.navigate(['/tabs/tab2']);
//go to tab1.ts
}
  //after validator methods, go to place.service.ts (bnb4)

}
