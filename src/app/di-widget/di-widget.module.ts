import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  WidgetItemComponent,
  WidgetStubComponent,
} from '../standalone-components';
import { WidgetComponent } from './components';

@NgModule({
  imports: [CommonModule, WidgetItemComponent, WidgetStubComponent],
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
})
export class DiWidgetModule {}
