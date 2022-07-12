import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodRouterModule } from './good-router';
import { RootComponent } from './components';
import { DiWidgetModule } from '../di-widget/di-widget.module';
import {
  FirstDataDirective,
  ThirdDataDirective,
  SecondDataDirective,
} from './directives';

@NgModule({
  imports: [CommonModule, DiWidgetModule, GoodRouterModule],
  declarations: [
    RootComponent,
    FirstDataDirective,
    SecondDataDirective,
    ThirdDataDirective,
  ],
})
export class GoodModule {}
