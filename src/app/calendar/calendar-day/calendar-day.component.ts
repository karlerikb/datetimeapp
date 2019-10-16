import { Component, OnInit, Input } from '@angular/core';
import { DateTimeService } from 'src/app/shared/date-time.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {

  @Input() date: Date;
  daySelected: boolean;

  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit() {
    this.initDaySelection();
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
    const dayMatches = Boolean(this.date.getDate() === this.dateTimeService.activeDate.getDate());
    const monthMatches = Boolean(this.date.getMonth() === this.dateTimeService.activeDate.getMonth());
    const yearMatches = Boolean(this.date.getFullYear() === this.dateTimeService.activeDate.getFullYear());

    this.daySelected = Boolean(dayMatches && monthMatches && yearMatches);
  }
}
