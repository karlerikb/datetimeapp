import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DateTimeService } from '../shared/date-time.service';

@Component({
  selector: 'app-date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.scss']
})
export class DateTimeInputComponent implements OnInit {

  date: {
    day: number,
    month: number,
    year: number,
    hours: number,
    minutes: number
  };

  @ViewChild('dayInput', { static: false }) dayInput: ElementRef;
  @ViewChild('monthInput', { static: false }) monthInput: ElementRef;
  @ViewChild('yearInput', { static: false }) yearInput: ElementRef;
  @ViewChild('hoursInput', { static: false }) hoursInput: ElementRef;
  @ViewChild('minutesInput', { static: false }) minutesInput: ElementRef;

  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit() {
    this.initDate();
  }

  onDayInput() {
    console.log('Day input');
  }

  onMonthInput() {
    console.log('Month input');
  }

  onYearInput() {
    console.log('Year input');
  }

  private initDate() {
    const activeDate = this.dateTimeService.activeDate;
    this.date = {
      day: activeDate.getDate(),
      month: activeDate.getMonth() + 1,
      year: activeDate.getFullYear(),
      hours: activeDate.getHours(),
      minutes: activeDate.getMinutes()
    };
  }

  private getDateInputs() {
    return {
      day: this.dayInput.nativeElement.value,
      month: this.monthInput.nativeElement.value,
      year: this.yearInput.nativeElement.value,
      hours: this.hoursInput.nativeElement.value,
      minutes: this.minutesInput.nativeElement.value,
    };
  }
}
