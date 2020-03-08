import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5300/usuario/';
  }


  login(email: string, password: string): Observable<any> {
    const jsonParams = JSON.stringify({ email: email, password: password });
    // console.log('json:' + json)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(this.url + 'login', jsonParams, { headers });
    /*  .map((response: Response) => {
        // login successful if there's a jwt token in the response
        // const token = response.json() && response.json().token;
        const token = response['token'];
        if (token) {
          // set token property
          this.token = token;
          alert('ok token' + token);

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          alert('eror en el login' + response);
          // return false to indicate failed login
          return false;
        }
      });*/
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
