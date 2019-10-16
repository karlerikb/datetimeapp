import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  generateDays(date: Date): Date[] {
    const firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const currentMonthDays = this.getCurrentMonthDays(firstOfMonth, lastOfMonth);
    const lastMonthDays = this.getLastMonthDays(firstOfMonth);
    const nextMonthDays = this.getNextMonthDays(lastOfMonth);

    return lastMonthDays.concat(currentMonthDays, nextMonthDays);
  }

  private getCurrentMonthDays(startDate: Date, endDate: Date): Date[] {
    return this.getDatesBetween(startDate, endDate);
  }

  private getLastMonthDays(firstOfMonth: Date): Date[] {
    if (firstOfMonth.getDay() !== 1) {
      const firstWeekMonday = this.getFirstDayOfTheWeek(firstOfMonth);
      return this.getDatesBetween(firstWeekMonday, firstOfMonth).slice(0, -1);
    }
    return [];
  }

  private getNextMonthDays(lastOfMonth: Date): Date[] {
    if (lastOfMonth.getDay() !== 0) {
      const lastWeekSunday = this.getLastDayOfTheWeek(lastOfMonth);
      return this.getDatesBetween(lastOfMonth, lastWeekSunday).slice(1);
    }
    return [];
  }

  private getFirstDayOfTheWeek(date: Date): Date {
    const day = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(new Date(date).setDate(day));
  }

  private getLastDayOfTheWeek(date: Date): Date {
    const day = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(new Date(date).setDate(day));
  }

  private getDatesBetween(startDate: Date, endDate: Date): Date[] {
    const dates = [];
    for (const loopDay = new Date(startDate); loopDay <= endDate; loopDay.setDate(loopDay.getDate() + 1)) {
      dates.push(new Date(loopDay));
    }
    return dates;
  }
}
