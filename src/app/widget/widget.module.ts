import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetComponent } from './components';
import {
  WidgetItemComponent,
  WidgetStubComponent,
} from '../standalone-components';

@NgModule({
  imports: [CommonModule, WidgetItemComponent, WidgetStubComponent],
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
})
export class WidgetModule {}
