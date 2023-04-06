import { Component, OnInit } from '@angular/core';
import { BodyTemperature } from 'src/app/model/bodytemperature';
import { GetTemperatureReadingService } from 'src/app/get-temperature-readings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  readingList: BodyTemperature[] = [];

  constructor(private readingService: GetTemperatureReadingService) { }
    ngOnInit(): void {
      const promise = this.readingService.getAllReadings();
    promise.then(
      response => {
        this.readingList = response["res"];
      },
      error => {
        console.log("error " + error);
      }
    );
  }

}