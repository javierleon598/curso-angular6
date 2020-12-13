import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appEspiame]'
})
export class EspiameDirective implements OnInit, OnDestroy {

  static nextId = 0;
  log = (msg: string) => console.log(`Evento #${EspiameDirective.nextId++} ${msg}`);
  
  constructor() { }

  ngOnInit() { this.log(`########******** onInit`); }

  ngOnDestroy() { this.log(`########******** onDestroy`); }

}
