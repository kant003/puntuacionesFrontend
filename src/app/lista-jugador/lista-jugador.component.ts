import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../services/jugador.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './lista-jugador.component.html',
  styleUrls: ['./lista-jugador.component.css']
})
export class ListaJugadorComponent implements OnInit {
  public listaJugadores: Jugador[];
  constructor(public jugadorService: JugadorService) { }

  ngOnInit() {
    //this.listaJugadores = this.jugadorService.getAllJugadores();
    this.getUsuarios();
  }

  getUsuarios() {
    this.jugadorService.getAllJugadores().subscribe(
      result => {
        console.log(result)
        this.listaJugadores = result['datos'];
      },
      error => {
        alert('Error al listas las puntuaciones');
      },
      () => {

      }
    );
  }

  borrarJugador(id: string) {
    this.jugadorService.removeJugador(id).subscribe(
      result => this.getUsuarios()      ,
      error => alert(`Error al borrar el usuario: ${error.error.mensaje}`)
    );
  }

}
