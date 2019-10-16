import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateTimeInputComponent } from './date-time-input/date-time-input.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDayComponent } from './calendar/calendar-day/calendar-day.component';
import { HighlightDirective } from './calendar/calendar-day/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeInputComponent,
    CalendarComponent,
    CalendarDayComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
