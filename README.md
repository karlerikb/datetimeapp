# Datetimeapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Instructions to get the app running

### Prerequisites

0. ([Node.js](https://nodejs.org/en/) is required)
1. Install Angular CLI `npm uninstall -g @angular/cli`

### Getting the app

2. Clone this repository (`git clone https://github.com/karlerikb/datetimeapp.git`)
3. Navigate to the generated project folder `cd datetimeapp`
4. Install dependencies `npm install`

### Running in development mode

5. Run development server `ng serve`
6. Navigate to `http://localhost:4200/`

### Building the application

7. Build the application `ng build --prod`
8. The built application is in `dist/` directory


## Description

* Application allows to **select a date and a time from the current month** and **submit it as an UTC-formatted date**
* Selecting different months or years is disabled, but if a week has days from both the current month and from the previous or next month, then they will be displayed
* If those dates which aren't part of the current month are selected, an error is displayed and the submit button is disabled
* When a date is submitted, either an error is shown (to mock an error when sending a request to the server), or a success message is shown and in which case the date is logged to the console
* For simplicity purposes the error or success of the submit is determined by an RNG
