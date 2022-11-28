import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  @Input()
  game : Game;

  ngOnInit(): void {
  }

  upQuantity(game : Game) : void{
    if(game.cantidad <game.stock)
    game.cantidad++;
  }
  downQuantity(game : Game) : void{
    if(game.cantidad > 0){
    game.cantidad--;
    } 
  }
}
