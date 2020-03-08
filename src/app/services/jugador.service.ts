import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { Puntuacion } from '../models/puntuacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5300/usuario';
  }

  getAllJugadores(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getJugador(id: string) {
    return this.httpClient.get(this.url + '/' + id);
  }

  getPuntuaciones(id: string) {
    return this.httpClient.get(this.url + '/' + id + '/puntuacion' );
  }

  addPuntuacion(id: string, puntuacion: Puntuacion){
    puntuacion._id=undefined;
    const body = JSON.stringify(puntuacion);
    const headers = new HttpHeaders( {'Content-Type' : 'application/json'} );
    return this.httpClient.post(this.url + '/' + id + '/puntuacion', body, {headers});

  }



  addJugador(jugador: Jugador){
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders( {'Content-Type' : 'application/json'} );
    return this.httpClient.post(this.url+'/register', body, {headers});
  }

  removeJugador(id: string){
    return this.httpClient.delete(this.url + '/' + id); //DELETE http://localhost:5200/usuario/XXXXXX
  }

  updateJugador(id: string, jugador: Jugador){
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders( {'Content-Type' : 'application/json'} );
    return this.httpClient.put(this.url + '/' + id, body, {headers}); // PUT http://localhost:5200/usuario/xxxxxx
  }

  // TODO borrar, insert, update, delete
}
