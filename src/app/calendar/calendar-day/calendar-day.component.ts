import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DateTimeService } from 'src/app/shared/date-time.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit, OnDestroy {

  @Input() date: Date;
  daySelected: boolean;
  dateInputSubscription: Subscription;
  dateSelectedSubscription: Subscription;

  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit() {
    this.initDaySelection();
    this.dateInputSubscription = this.dateTimeService.dateInput.subscribe((inputDate) => {
      const currentDay = this.validateDate(this.date, this.dateTimeService.activeDate);
      this.daySelected = Boolean(inputDate.valid && currentDay);
    });

    this.dateSelectedSubscription = this.dateTimeService.dateSelected.subscribe((selectedDate) => {
      const currentDay = this.validateDate(this.date, this.dateTimeService.activeDate);
      this.daySelected = Boolean(selectedDate.valid && currentDay);
    });
  }

  onDaySelected() {
    const currentMonth = this.validateMonth(this.date, this.dateTimeService.activeDate);
    if (currentMonth) {
      this.updateActiveDate();
      this.dateTimeService.dateSelected.next({ valid: true });
    } else {
      this.dateTimeService.dateSelected.next({ valid: false });
    }
  }

  determineModifier() {
    const currentDaysMonth = this.date.getMonth();
    const activeDatesMonth = this.dateTimeService.activeDate.getMonth();

    return {
      'calendar-day--current-month': currentDaysMonth === activeDatesMonth,
      'calendar-day--last-month': currentDaysMonth === activeDatesMonth - 1,
      'calendar-day--next-month': currentDaysMonth === activeDatesMonth + 1
    };
  }

  private initDaySelection() {
    const validDate = this.validateDate(this.date, this.dateTimeService.activeDate);
    this.daySelected = validDate;
  }

  private updateActiveDate() {
    const selectedDate = new Date();
    selectedDate.setDate(this.date.getDate());
    selectedDate.setMonth(this.date.getMonth());
    selectedDate.setFullYear(this.date.getFullYear());
    this.dateTimeService.activeDate = selectedDate;
  }

  private validateDate(selectedDate: Date, compareDate: Date): boolean {
    const dayMatches = this.validateDay(selectedDate, compareDate);
    const monthMatches = this.validateMonth(selectedDate, compareDate);
    const yearMatches = this.validateYear(selectedDate, compareDate);
    return Boolean(dayMatches && monthMatches && yearMatches);
  }

  private validateDay(selectedDate: Date, compareDate: Date): boolean {
    return selectedDate.getDate() === compareDate.getDate();
  }

  private validateMonth(selectedDate: Date, compareDate: Date): boolean {
    return selectedDate.getMonth() === compareDate.getMonth();
  }

  private validateYear(selectedDate: Date, compareDate: Date): boolean {
    return selectedDate.getFullYear() === compareDate.getFullYear();
  }

  ngOnDestroy() {
    this.dateInputSubscription.unsubscribe();
    this.dateSelectedSubscription.unsubscribe();
  }
}
