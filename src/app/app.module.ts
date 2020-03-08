import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJugadorComponent } from './lista-jugador/lista-jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { AddJugadorComponent } from './add-jugador/add-jugador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { EditJugadorComponent } from './edit-jugador/edit-jugador.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { ListaPuntuacionesComponent } from './lista-puntuaciones/lista-puntuaciones.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ListaJugadorComponent,
    AddJugadorComponent,
    MenuComponent,
    EditJugadorComponent,
    LoginComponent,
    ListaPuntuacionesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,MatFormFieldModule, MatToolbarModule,MatSnackBarModule,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
