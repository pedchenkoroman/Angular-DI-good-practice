import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.css'],
})
export class WidgetItemComponent {
  @Input() data: { text: string; count: number };
}
