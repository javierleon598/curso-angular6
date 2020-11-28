
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { DestinoViaje } from './destino-viaje.model';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';

@Injectable()
export class DestinosApiClient {

	constructor(private store: Store<AppState>) {
        }
        
	add(d: DestinoViaje){
                const accion = new NuevoDestinoAction(d);
                console.log(d);
                console.log(accion);
                this.store.dispatch(accion);
        }

        elegir(d: DestinoViaje) {
                this.store.dispatch(new ElegidoFavoritoAction(d));
        }
} 