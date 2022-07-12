import { Directive } from '@angular/core';
import { WIDGET_DATA } from '../../di-widget/widget-data.provider';
import { ThirdService } from '../../services/third.service';

@Directive({
  selector: '[appThirdData]',
  providers: [
    {
      provide: WIDGET_DATA,
      useFactory: (third) => third.getData$(),
      deps: [ThirdService],
    },
  ],
})
export class ThirdDataDirective {}
