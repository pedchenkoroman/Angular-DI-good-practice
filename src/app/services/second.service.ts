import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  getData$(): Observable<{ text: string; count: number }> {
    return timer(5000).pipe(
      map(() => ({ text: 'second service', count: 222 }))
    );
  }
}
