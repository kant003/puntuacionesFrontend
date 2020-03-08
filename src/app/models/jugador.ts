import { Puntuacion } from './puntuacion';

export class Jugador {
  constructor(
    public _id: string,
    public nombre: string,
    public email: string,
    public password: string,
   // public puntuacion: Puntuacion[]
  ) { }
}
