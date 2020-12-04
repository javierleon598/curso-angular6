
import { forwardRef, Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppConfig, AppState, APP_CONFIG, db } from '../app.module';
import { DestinoViaje } from './destino-viaje.model';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from  '@angular/common/http'

@Injectable()
export class DestinosApiClient {
        destinos: DestinoViaje[] = [];

        constructor(private store: Store<AppState>, 
                @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig, 
                private http: HttpClient) {
        }
        
	add(d: DestinoViaje){
                const headers: HttpHeaders = new HttpHeaders({'X-API-TOKEN': 'token-seguridad'});
                const req = new HttpRequest(
                        'POST', this.config.apiEndpoint + '/my', 
                        { nuevo: d.nombre }, 
                        { headers: headers }
                );
                this.http.request(req)
                        .subscribe((data: HttpResponse<{}>) => {
		                if (data.status === 200) {
                                        const accion = new NuevoDestinoAction(d);
                                        this.store.dispatch(accion);
                                        const myDb = db;
                                        myDb.destinos.add(d);
                                        console.log("todos los destinos de la db!");
                                        myDb.destinos.toArray().then(destinos => console.log(destinos))
                                }
                });
        }

        elegir(d: DestinoViaje) {
                this.store.dispatch(new ElegidoFavoritoAction(d));
        }

        getById(id: string): DestinoViaje {
                return this.destinos.filter( function(d) { return d.id.toString() === id; })[0];
        }

        getAll(): DestinoViaje[] {
		return this.destinos;
	}

} 