import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
type Theme = string[];
const mockThemeList: Theme = [
  'base',
  'light',
  'dark'
]
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {}

  public getListThemes(): Observable<Theme> {
    return of(mockThemeList).pipe(delay(5000));
  }
}
