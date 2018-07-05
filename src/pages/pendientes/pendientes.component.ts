import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
    constructor( private listaDeseos: ListaDeseosService ) {

     }

    ngOnInit() { }
}