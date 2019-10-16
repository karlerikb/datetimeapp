import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';
import { DateTimeService } from '../shared/date-time.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  days: Date[] = [];

  constructor(private calendarService: CalendarService, private dateTimeService: DateTimeService) { }

  ngOnInit() {
    this.days = this.calendarService.generateDays(this.dateTimeService.activeDate);
  }

}
