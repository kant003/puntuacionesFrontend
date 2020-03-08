import { Component, OnInit, Input } from '@angular/core';
import { JugadorService } from '../services/jugador.service';
import { PuntuacionService } from '../services/puntuacion.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Puntuacion } from '../models/puntuacion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-puntuaciones',
  templateUrl: './lista-puntuaciones.component.html',
  styleUrls: ['./lista-puntuaciones.component.css']
})
export class ListaPuntuacionesComponent implements OnInit {

  @Input() public idJugador;
  public puntuaciones;
  public form: FormGroup;
  public cargando: boolean = false;

  constructor(public formBuilder: FormBuilder,
    public jugadorService: JugadorService,
    public puntuacionService: PuntuacionService,
    public _snackBar: MatSnackBar) { }

  cargarPuntuaciones() {
    this.cargando = true;
    this.jugadorService.getPuntuaciones(this.idJugador).subscribe(
      result => this.puntuaciones = result['datos'].puntuaciones,
      error => console.error(error),
      () => this.cargando = false
    );
  }

  ngOnInit(): void {
    this.cargarPuntuaciones();

    this.form = this.formBuilder.group({
      puntuacion: ['0', [Validators.required]],
      // password: ['Ad1234', Validators.required]
    });
  }

  borrarPuntuacion(id: string) {
    this.puntuacionService.removePuntuacion(id).subscribe(
      result => this.cargarPuntuaciones(),
      error => {
        this._snackBar.open('Error al borrar la puntuacion:' + error.error.mensaje, 'OK', {duration: 5000});
        console.error(error);
      }
    );
  }

  guardarPuntuacion(puntuacion: Puntuacion) {
    this.jugadorService.addPuntuacion(this.idJugador, puntuacion).subscribe(
      result => this.cargarPuntuaciones(),
      error => console.error(error)
    );
  }

  onSubmit(formValue) {
    const puntuacion = new Puntuacion('', formValue.puntuacion);
    this.guardarPuntuacion(puntuacion);
  }

}
