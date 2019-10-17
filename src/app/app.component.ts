import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateTimeService } from './shared/date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  validDate = true;
  successMsg = false;
  errorMsg = false;
  validDateSubscription: Subscription;
  message = {
    shown: false,
    title: '',
    body: ''
  };

  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit() {
    this.validDateSubscription = this.dateTimeService.validDate.subscribe((validDate) => {
      this.validDate = validDate;
      this.successMsg = false;
      this.errorMsg = false;
      if (!validDate) {
        this.errorMsg = true;
        this.showErrorMessage('Please select a date from the current month.');
      } else {
        this.clearMessage();
      }
    });
  }

  onSubmit() {
    this.dateTimeService.submitDate().subscribe(
      () => {
        this.successMsg = true;
        this.errorMsg = false;
        this.showSuccessMessage('Date successfully submitted!');
      },
      () => {
        this.errorMsg = true;
        this.successMsg = false;
        this.showErrorMessage('Submitting the date to server failed.');
      }
    );
  }

  private showErrorMessage(message: string) {
    this.message.shown = true;
    this.message.title = 'Error!';
    this.message.body = message;
  }

  private showSuccessMessage(message: string) {
    this.message.shown = true;
    this.message.title = 'Success!';
    this.message.body = message;
  }

  private clearMessage() {
    this.message.shown = false;
    this.message.title = '';
    this.message.body = '';
  }

  ngOnDestroy() {
    this.validDateSubscription.unsubscribe();
  }
}
