import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Game } from '../Game';
import { GamesCartService } from '../games-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaCompras !: Game[];

  constructor(private carrito : GamesCartService) {
    carrito.listaCompras.subscribe((observable) => this.listaCompras = observable);
   }

  ngOnInit(): void {
  }

}
