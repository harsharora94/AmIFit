import { Injectable } from '@angular/core';
import { readingList } from "../app/data/data";
import { BodyTemperature } from "../app/model/bodytemperature";

@Injectable({
  providedIn: 'root'
})


export class GetTemperatureReadingService {

  readingList: BodyTemperature[] = readingList;
  constructor() { }

  getAllReadings() {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.readingList };
        resolve(data);
      }, 2000);
    });
  }

}