import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Lista , ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";

    agregados: boolean;

    items: ListaItem[] = [];

    constructor( 
        public alertCtrl: AlertController,
        public navCtrl:NavController,
        public _listaDeseos: ListaDeseosService
    ) { 

        this.agregados = false;

     }

    ngOnInit() { }

    agregar() {
        if( this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push( item );
        this.nombreItem = "";
        this.agregados = true;
    }
    eliminarItem( idx: number ) { 

        this.items.splice( idx, 1);

        if(this.items.length == 0) {
            this.agregados = false;
        }
        return this.items;
    }

    guardarLista() {
        if ( this.nombreLista.length == 0) {
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista no puede estar vacia. Por favor definale un nombre y vuelva a intentarlo.',
                buttons: ['OK']
            });
           alert.present(); 
           return;
        } 

        let lista = new Lista( this.nombreLista );
        lista.items = this.items;

        //this._listaDeseos.listas.push( lista );
        this._listaDeseos.agregarLista( lista );
        this.navCtrl.pop();

    }
}