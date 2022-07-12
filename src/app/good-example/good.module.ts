import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetModule } from '../widget/widget.module';
import { GoodRouterModule } from './good-router';
import { RootComponent } from './components';

@NgModule({
  imports: [CommonModule, WidgetModule, GoodRouterModule],
  declarations: [RootComponent],
})
export class GoodModule {}
