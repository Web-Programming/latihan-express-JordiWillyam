import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Tulus',
      city: 'Palembang',
      state: 'Sumsel',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT778q7RjEtGzcQo6zbH6297O2HvEsSc66kDA&s',
      avaliableUnits: 1,
      wifi: true,
      laundry: true,
    },

    {
      id: 1,
      name: 'Land Land',
      city: 'Palembang',
      state: 'Sumsel',
      photo:
        'https://nowpalembang.com/wp-content/uploads/2021/04/perumahan-palembang.jpg',
      avaliableUnits: 12,
      wifi: true,
      laundry: false,
    },
  ];

  constructor() {}
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id == id
    );
  }
  submitApplication(firstName: String,lastName : String,email: String){
    console.log(firstName,lastName,email)
  }
}
