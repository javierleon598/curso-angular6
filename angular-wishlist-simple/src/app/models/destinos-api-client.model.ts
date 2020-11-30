
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { DestinoViaje } from './destino-viaje.model';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';

@Injectable()
export class DestinosApiClient {
        destinos: DestinoViaje[] = [];

	constructor(private store: Store<AppState>) {
                this.store.select(state => state.destinos ).subscribe((data) => {
                        console.log('destinos sub store');
                        console.log(data);
                        this.destinos = data.items;
                });
                this.store.subscribe((data)=>{
                        console.log('all store');
                        console.log(data);
                });
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

        getById(id: string): DestinoViaje {
                return this.destinos.filter( function(d) { return d.id.toString() === id; })[0];
        }
} 