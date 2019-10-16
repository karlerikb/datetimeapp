import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateTimeInputComponent } from './date-time-input/date-time-input.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDayComponent } from './calendar/calendar-day/calendar-day.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeInputComponent,
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
