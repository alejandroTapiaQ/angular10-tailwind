import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import {Cat} from './interfaces/cat-interface';
import { environment } from '../../../environments/environment';
import { map, switchMap } from 'rxjs/operators';

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

  public getCat(nameCat: string): Observable<Cat> {
    let headers = new HttpHeaders();
    headers = headers.append('x-api-key', this.tokenApi);
    return this.http.get<Cat[]>(`https://api.thecatapi.com/v1/breeds/search?q=${nameCat}`, {headers})
    .pipe(
      switchMap((cats) => {
        let tmpCat: any = {};
        if (cats.length > 0) {
          tmpCat = cats[0];
          return this.http.get<Cat[]>(`https://api.thecatapi.com/v1/images/${tmpCat['reference_image_id']}`, {headers})
            .pipe(
              map((final: any) => {
                tmpCat.image = {
                  id: tmpCat.reference_image_id,
                  url: final.url,
                };
                return tmpCat;
              })
            )
        } else {
          return of({});
        }
      })
      // map((cats) => {
      //   if (cats.length > 0) {
      //     return cats[0];
      //   }
      //   return { id: null, description: null, image: null, name: null };
      // })
    );
  }
}
