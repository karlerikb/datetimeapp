import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DateTimeService } from '../shared/date-time.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.scss']
})
export class DateTimeInputComponent implements OnInit, OnDestroy {

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

  dateSelectedSubscription: Subscription;

  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit() {
    this.initDate();
    this.dateSelectedSubscription = this.dateTimeService.dateSelected.subscribe((selectedDate) => {
      if (selectedDate.valid) {
        this.constructDate(this.dateTimeService.activeDate);
      } else {
        this.date.day = null;
      }
    });
  }

  onDateInput() {
    const selectedDateValid = this.validateDateTime();

    if (selectedDateValid) {
      this.updateActiveDate();
      this.dateTimeService.dateInput.next({ valid: true });
      this.dateTimeService.validDate.next(true);
    } else {
      this.dateTimeService.dateInput.next({ valid: false });
      this.dateTimeService.validDate.next(false);
    }
  }

  private initDate() {
    const activeDate = this.dateTimeService.activeDate;
    this.constructDate(activeDate);
  }

  private updateActiveDate() {
    this.dateTimeService.activeDate = this.constructedDate;
  }

  private constructDate(selectedDate: Date) {
    this.date = {
      day: selectedDate.getDate(),
      month: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear(),
      hours: selectedDate.getHours(),
      minutes: selectedDate.getMinutes()
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

  private validateDateTime(): boolean {
    const selectedDate = this.constructedDate;
    const activeDate = this.dateTimeService.activeDate;
    const withinCurrentMonth = Boolean(selectedDate.getMonth() === activeDate.getMonth());
    const withinCurrentYear = Boolean(selectedDate.getFullYear() === activeDate.getFullYear());
    return Boolean(selectedDate && withinCurrentMonth && withinCurrentYear);
  }

  private get constructedDate(): Date {
    const inputs = this.getDateInputs();
    return new Date(inputs.year, inputs.month - 1, inputs.day, inputs.hours, inputs.minutes);
  }

  ngOnDestroy() {
    this.dateSelectedSubscription.unsubscribe();
  }
}
