import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  private date = new Date();

  dateInput = new Subject<{ valid: boolean, date?: Date }>();
  dateSelected = new Subject<{ valid: boolean, date?: Date }>();

  constructor() { }

  get activeDate() {
    return new Date(this.date);
  }

  set activeDate(updatedDate: Date) {
    this.date = new Date(updatedDate);
  }
}
