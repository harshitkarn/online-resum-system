import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private loginSubject = new Subject<boolean>();
  loginStatus$ = this.loginSubject.asObservable();

  constructor() { }

  getCookie(name: string): string | null {
    const dc = document.cookie;
    const prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin) as any;
      if (end == -1) {
        end = dc.length;
      }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  setCookie(name: string, value: string, days: number = 10) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    this.emitLoginStatus();
  }

  eraseCookie(name: string) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.emitLoginStatus();
  }

  checkAuth(): Promise<boolean> {
    return Promise.resolve(this.getCookie('login') === 'some_token');
  }

  checkAuthSync(): boolean {
    return this.getCookie('login') === 'some_token';
  }

  private emitLoginStatus() {
    const isLoggedIn = this.checkAuthSync();
    this.loginSubject.next(isLoggedIn);
  }
}
