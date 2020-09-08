import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instantaneous-temperature',
  templateUrl: './instantaneous-temperature.component.html',
  styleUrls: ['./instantaneous-temperature.component.scss']
})
export class InstantaneousTemperatureComponent implements OnInit {

  temprature = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
