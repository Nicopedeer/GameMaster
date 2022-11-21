import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor() { }
  game = {
    nombre : "Uncharted 4",
    precio: "500",
    desarrollador : "Naugthy Dog",
    image: "assets/uncharted.jpg",
    stock : "40"

  }
  ngOnInit(): void {
  }

}


