import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
})
export class ListaDestinosComponent implements OnInit {
  //VARIABLES
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

  //CONTRUCTOR
  constructor(
    public destinosApiClient: DestinosApiClient,
    private store: Store<AppState>
  ) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select((state) => state.destinos.favorito)
      .subscribe((data) => {
        const  f = data;
        if (f != null) {
          this.updates.push('Se eligió: ' + f.nombre);
        }
      });
    this.store.select((state) => state.destinos.items).subscribe((items) => (this.all = items));
  }

  //METODOS
  ngOnInit(): void {
  }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    console.log("hola mundo");
    this.onItemAdded.emit(d);
  }

  elegido(d: DestinoViaje) {
    this.destinosApiClient.elegir(d);
  }

}
