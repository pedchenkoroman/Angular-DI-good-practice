import { Directive } from '@angular/core';

import { WIDGET_DATA } from '../../di-widget/widget-data.provider';
import { SecondService } from '../../services';

@Directive({
  selector: '[appSecondData]',
  providers: [
    {
      provide: WIDGET_DATA,
      useFactory: (second) => second.getData$(),
      deps: [SecondService],
    },
  ],
})
export class SecondDataDirective {}
