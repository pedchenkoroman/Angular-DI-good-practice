import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  WidgetData,
  WIDGET_DATA,
  WIDGET_DATA_PROVIDER,
} from '../../widget-data.provider';

@Component({
  selector: 'di-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [WIDGET_DATA_PROVIDER],
})
export class WidgetComponent {
  constructor(@Inject(WIDGET_DATA) public data$: Observable<WidgetData>) {}
}
