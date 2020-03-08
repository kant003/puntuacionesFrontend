import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5300/puntuacion';
  }

  private getToken() {
    const currentUser = localStorage.getItem('currentUser');
    let token='';
    if (currentUser) {
      token = JSON.parse(currentUser).token;
    }
    return token;
  }

  removePuntuacion(id: string) {
    const headers = new HttpHeaders({ 'auth-token': this.getToken() });

    return this.httpClient.delete(this.url + '/' + id, {headers});
  }

}
