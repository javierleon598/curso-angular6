import {v4 as uuid} from 'uuid';

export class DestinoViaje {
    selected: boolean;
    servicios: string[];
    id = uuid();
    constructor(public nombre:string, public imagenUrl:string, public votes:number = 0) {
        this.servicios = ['pileta','desayuno'];
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean) {
        this.selected = s;
    }

    voteUp(): any {
        this.votes++;
    }
    
    voteDown(): any {
        this.votes--;
    }
}