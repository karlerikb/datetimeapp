import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDayHighlighted]'
})
export class HighlightDirective {

  @Input() appDayHighlighted: boolean;

  constructor() { }

  @HostBinding('class.highlighted') get dayHighlighted() {
    return this.appDayHighlighted;
  }
}
