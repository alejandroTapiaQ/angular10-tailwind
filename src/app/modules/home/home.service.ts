import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import {Cat} from './interfaces/cat-interface';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private tokenApi = environment.tokenApi;
  constructor(
    private readonly http: HttpClient
  ) { }

  public getCats(): Observable<Cat[]> {
    let headers = new HttpHeaders();
    headers = headers.append('x-api-key', this.tokenApi);
    return this.http.get<Cat[]>('https://api.thecatapi.com/v1/breeds?limit=50', {headers}).pipe(
      map((cats) => {
        return cats.map((v) => {
          return v;
        });
      })
    );
  }
}
