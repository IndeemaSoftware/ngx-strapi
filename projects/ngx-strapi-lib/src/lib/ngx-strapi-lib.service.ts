import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxStrapiLibService {

  constructor(private http: Http) { }

  signin(email: string, password: string, rememberMe: boolean): Observable<any>  {
    return this.http.post('/auth/local', { identifier: email, password: password }).pipe(map((response: Response) => {
        const user = response.json();
        if (user && user.jwt) {
          if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          } else if (!rememberMe) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
          }
        }
      }));
  }

  signup(data): Observable<any>  {
    return this.http.post('/auth/local/register', data).pipe(map((response: Response) => response.json()));
  }

  forgotPassword(email: string, url: string): Observable<any>  {
    return this.http.post('/auth/forgot-password', JSON.stringify({ email, url }), this.jwt())
     .pipe(map((response: Response) => response.json()));
  }

  resetPassword(password: string, passwordConfirmation: string, code: string): Observable<any>  {
    return this.http.post('/auth/reset-password', { password, passwordConfirmation, code })
     .pipe(map((response: Response) => response.json()));
  }

  logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
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
