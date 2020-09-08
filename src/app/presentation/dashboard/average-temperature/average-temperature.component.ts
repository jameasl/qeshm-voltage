import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-temperature',
  templateUrl: './average-temperature.component.html',
  styleUrls: ['./average-temperature.component.scss']
})
export class AverageTemperatureComponent implements OnInit {

  tempratures = [
    {
      details: [
       {
         tempratue: 20,
         time: '01/01/1399'
       },
       {
        tempratue: 30,
        time: '02/01/1399'
      }

      ],
      title: 'دمای میانگین'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
