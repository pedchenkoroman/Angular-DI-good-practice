import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components';
import { WidgetModule } from '../widget/widget.module';
import { BadRouterModule } from './bad-router.module';

@NgModule({
  imports: [CommonModule, WidgetModule, BadRouterModule],
  declarations: [RootComponent],
})
export class BadExampleModule {}
