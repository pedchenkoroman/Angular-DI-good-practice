import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetComponent, StubComponent, ItemComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetComponent, StubComponent, ItemComponent],
  exports: [WidgetComponent],
})
export class DiWidgetModule {}
