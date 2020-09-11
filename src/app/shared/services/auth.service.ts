import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
url = environment.auth.apiBaseUrl;
key = environment.auth.key;

constructor(private http : HttpClient) { }

public login(body:any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`,body).pipe(
      map((res:any)=>{
        this.authSucess(res.idToken);
        return res;
      })
    );
  }

private authSucess(token:string):void{
  localStorage.setItem('auth',token);
}
}
