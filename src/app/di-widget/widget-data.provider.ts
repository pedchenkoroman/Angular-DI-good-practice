import { InjectionToken, Provider } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface WidgetData {
  text: string;
  count: number;
}

export const WIDGET_DATA = new InjectionToken<Observable<WidgetData>>(
  'A stream of data for a di widget'
);

export const WIDGET_DATA_PROVIDER: Provider[] = [
  {
    provide: WIDGET_DATA,
    useFactory: () =>
      of({
        count: 9999,
        text: 'Default widget data',
      }).pipe(delay(1000)),
  },
];
