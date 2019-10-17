import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';


describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CalendarService] });
    service = TestBed.get(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate calendar dates for any October 2019 date', () => {
    const octoberDate1 = new Date(2019, 9, 20);
    const octoberDate2 = new Date(2019, 9, 1);
    const octoberDate3 = new Date(2019, 9, 31);
    const generatedDates = [
      new Date(2019, 8, 30),
      new Date(2019, 9, 1),
      new Date(2019, 9, 2),
      new Date(2019, 9, 3),
      new Date(2019, 9, 4),
      new Date(2019, 9, 5),
      new Date(2019, 9, 6),
      new Date(2019, 9, 7),
      new Date(2019, 9, 8),
      new Date(2019, 9, 9),
      new Date(2019, 9, 10),
      new Date(2019, 9, 11),
      new Date(2019, 9, 12),
      new Date(2019, 9, 13),
      new Date(2019, 9, 14),
      new Date(2019, 9, 15),
      new Date(2019, 9, 16),
      new Date(2019, 9, 17),
      new Date(2019, 9, 18),
      new Date(2019, 9, 19),
      new Date(2019, 9, 20),
      new Date(2019, 9, 21),
      new Date(2019, 9, 22),
      new Date(2019, 9, 23),
      new Date(2019, 9, 24),
      new Date(2019, 9, 25),
      new Date(2019, 9, 26),
      new Date(2019, 9, 27),
      new Date(2019, 9, 28),
      new Date(2019, 9, 29),
      new Date(2019, 9, 30),
      new Date(2019, 9, 31),
      new Date(2019, 10, 1),
      new Date(2019, 10, 2),
      new Date(2019, 10, 3),
    ];
    expect(service.generateDays(octoberDate1)).toEqual(generatedDates);
    expect(service.generateDays(octoberDate2)).toEqual(generatedDates);
    expect(service.generateDays(octoberDate3)).toEqual(generatedDates);
  });
});
