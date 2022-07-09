import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent, StubComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetComponent, StubComponent],
  exports: [WidgetComponent],
})
export class WidgetModule {}
