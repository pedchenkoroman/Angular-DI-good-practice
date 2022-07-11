import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.template.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() data: { text: string; count: number };
}
