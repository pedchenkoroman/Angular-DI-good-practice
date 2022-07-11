import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThirdService {
  constructor() {}

  getData$(): Observable<{ text: string; count: number }> {
    return timer(4500).pipe(map(() => ({ text: 'third service', count: 333 })));
  }
}
