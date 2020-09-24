import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  //VARIABLES
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  //CONTRUCTOR
  constructor(public destinosApiClient:DestinosApiClient) {
    this.onItemAdded = new EventEmitter();
  }
  //METODOS
  ngOnInit(): void {
  }

  guardar(nombre: string, url: string):boolean {
    let d = new DestinoViaje(nombre, url);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    console.log(this.destinosApiClient);
    return false; 
  }

  elegido(d: DestinoViaje){
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    d.setSelected(true);
  }

}
