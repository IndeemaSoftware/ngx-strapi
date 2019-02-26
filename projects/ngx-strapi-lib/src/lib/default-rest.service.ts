import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultRestService {

  constructor(private http: Http) { }

  view(data) {
    return this.http.get(data.url, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  list(data) {
    return this.http.get(data.url, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  create(data) {
    return this.http.post(data.url, data, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  update(data) {
    return this.http.put(data.url, data, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  delete(data) {
    return this.http.delete(data.url, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  private jwt() {
    let currentUser;
    if (localStorage.getItem('currentUser')) {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } else {
      currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }

    if (currentUser && currentUser.jwt) {
    const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.jwt });
      return new RequestOptions({ headers: headers });
    }
  }
}
