import { Directive } from '@angular/core';
import { WIDGET_DATA } from '../../di-widget/widget-data.provider';
import { FirstService } from '../../services';

@Directive({
  selector: '[appFirstData]',
  providers: [
    {
      provide: WIDGET_DATA,
      useFactory: (first) => first.getData$(),
      deps: [FirstService],
    },
  ],
})
export class FirstDataDirective {}
