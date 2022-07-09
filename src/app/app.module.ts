import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  imports: [BrowserModule, WidgetModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
