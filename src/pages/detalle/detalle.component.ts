import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

    idx: number;
    lista: any;

    constructor(
        public navCrtl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public _listaDeseos: ListaDeseosService
    ) { 

        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
        
    }


    ngOnInit() { }

    actualizar(item: ListaItem){

        item.completado = !item.completado;

        let todosMarcados = true;
        for (let item of this.lista.items ) {
            if ( !item.completado ) {
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminada = todosMarcados;
        this._listaDeseos.actualizarData();
    }
    borrarLista(){

        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: 'Esta seguro que desea eliminar esta lista?',
            buttons: [ 'Cancelar',
                {
                    text: 'Continuar',
                    handler: () => {
                        this._listaDeseos.eliminarLista( this.idx );
                        this.navCrtl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}