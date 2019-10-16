import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  private date = new Date();

  constructor() { }

  get activeDate() {
    return new Date(this.date);
  }

  set activeDate(updatedDate: Date) {
    this.date = new Date(updatedDate);
  }
}
