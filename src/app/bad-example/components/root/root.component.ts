import { Component } from '@angular/core';
import { FirstService, SecondService, ThirdService } from '../../../services';

@Component({
  selector: 'bad-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent {
  public first$ = this.firstService.getData$();
  public second$ = this.secondService.getData$();
  public third$ = this.thirdService.getData$();

  constructor(
    private firstService: FirstService,
    private secondService: SecondService,
    private thirdService: ThirdService
  ) {}
}
