import { Component, OnInit } from '@angular/core';
import { game } from '../game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor() { }
  games : game [] = [
    {
      nombre : "Uncharted 4",
      precio: 500,
      desarrollador : "Naugthy Dog",
      image: "assets/uncharted.jpg",
      stock : 40,
      oferta : true,
      cantidad : 0
    },
    {
      nombre : "Fifa 23",
      precio: 600,
      desarrollador : "Electronics Arts",
      image: "assets/fifa.jpg",
      stock : 5,
      oferta : true,
      cantidad : 0
    },
    {
      nombre : "Spider-Man",
      precio: 450,
      desarrollador : "Insomniac Games",
      image: "assets/spiderman.jpg",
      stock : 0,
      oferta : false,
      cantidad : 0
    }
  ]
  ngOnInit(): void {
  }
  upQuantity(game : game) : void{
    if(game.cantidad <game.stock)
    game.cantidad++;
  }
  downQuantity(game : game) : void{
    if(game.cantidad > 0){
    game.cantidad--;
    } 
  }

}


