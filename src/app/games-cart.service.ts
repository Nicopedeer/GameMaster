import { Injectable } from '@angular/core';
import { Game } from './Game';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesCartService {
  private _listaCompras : Game[] = [];
  listaCompras : BehaviorSubject<Game[]> = new BehaviorSubject(this._listaCompras);
  

  anadirAlCarrito(game: Game) {
    let item : Game = this._listaCompras.find((v1) => v1.nombre == game.nombre)!;
    if(!item){
      this._listaCompras.push({...game});
    }else{
      item.cantidad += game.cantidad;
    }
    this.listaCompras.next(this._listaCompras);
  }

  constructor() { }
}
