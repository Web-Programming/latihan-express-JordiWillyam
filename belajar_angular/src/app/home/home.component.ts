import { Component } from '@angular/core';
// import untuk menggabungkan home dan housing

import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  housingLocationList: HousingLocation[]=[
    {
    id: 0,
    name: "Tulus",
    city: "Palembang",
    state: "Sumsel",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT778q7RjEtGzcQo6zbH6297O2HvEsSc66kDA&s",
    avaliableUnits: 1,
    wifi: true,
    laundry: true,
    },

    {
    id: 1,
    name: "Land Land",
    city: "Palembang",
    state: "Sumsel",
    photo: "https://nowpalembang.com/wp-content/uploads/2021/04/perumahan-palembang.jpg",
    avaliableUnits: 12,
    wifi: true,
    laundry: false,
    }
  ];
}
