import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
  imports: [BrowserModule, AppRouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
