import { Component } from '@angular/core';
import { FirstService, SecondService, ThirdService } from './services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public first$ = this.firstService.getData$();
  public second$ = this.secondService.getData$();
  public third$ = this.thirdService.getData$();

  constructor(
    private firstService: FirstService,
    private secondService: SecondService,
    private thirdService: ThirdService
  ) {}
}
