import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.template.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent {
  @Input() data: { text: string; count: number } = null;
}
