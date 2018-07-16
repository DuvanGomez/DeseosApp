import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { Lista } from '../../app/clases/index';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
    mostrar: boolean;
    cantidad: number;
    activo: number;
    constructor( private _listaDeseos: ListaDeseosService,
                private navCtrl: NavController ) {

                    this.mostrar= false;
                    this.cantidad = 2;
                    

     }

    ngOnInit() { }

    irAgregar() {
        this.navCtrl.push( AgregarComponent )
    }
    verDetalle(lista: Lista, idx: number) {
        this.navCtrl.push( DetalleComponent, { lista, idx });
    }
    mostrarItems( lista: Lista, jdx: number) {
        this.mostrar = !this.mostrar; 
        this.activo = jdx;
        if( this.mostrar == false ){
            this.cantidad = 2;
        } else{
            this.cantidad = lista.items.length;
        }
        return this.cantidad, this.activo;
    }

}