import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  private date = new Date();

  dateInput = new Subject<{ valid: boolean }>();
  dateSelected = new Subject<{ valid: boolean }>();
  validDate = new Subject<boolean>();

  constructor() { }

  submitDate() {
    // Mocking sending date to the server
    return new Observable((observer) => {
      const randomNum = Math.random();
      if (randomNum >= 0.33 ) {
        // "sending" data ...
        const data = JSON.stringify(this.activeDate.toUTCString());
        console.log(data);

        observer.next();
      } else {
        observer.error();
      }
    });
  }

  get activeDate() {
    return new Date(this.date);
  }

  set activeDate(updatedDate: Date) {
    this.date = new Date(updatedDate);
  }
}
