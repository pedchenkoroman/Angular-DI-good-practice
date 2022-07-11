import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor() {}

  getData$(): Observable<{ text: string; count: number }> {
    return timer(3000).pipe(map(() => ({ text: 'first service', count: 111 })));
  }
}
