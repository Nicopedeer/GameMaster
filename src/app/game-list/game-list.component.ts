import { Component, OnInit } from '@angular/core';
import { Game } from '../Game';
import { GameDataService } from '../game-data.service';
import { GamesCartService } from '../games-cart.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(
    private  carrito : GamesCartService,
    private listaJuegos : GameDataService
    ) { 
    
  }
  games : Game [] = [];
  ngOnInit(): void {
    this.listaJuegos.getAll()
    .subscribe(games => this.games = games);
  }
  
  anadirAlCarrito(game: Game) : void{

   this.carrito.anadirAlCarrito(game);
    game.stock -= game.cantidad;
    game.cantidad = 0;
    if(game.stock == 0)
    game.oferta = false;
  }

}


