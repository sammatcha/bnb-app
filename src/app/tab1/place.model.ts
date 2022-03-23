//define a class: define other objects ~ objects defined by class can inherit things
//you want it to inherit
export class Place {
    //define attributes w/in object w/in a class in constructor
    constructor (
        public id: string,
        public title: string,
        public description: string,
        public image: string,
        public price: number,
        //^ attributes for bnb1
        //added below for bnb2
        public availableFrom: Date,
        public availableTo: Date
        //go to place.service.ts to add Date for available From/To
    ){}
}
