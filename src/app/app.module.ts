import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

import { FormsModule } from '@angular/forms';
import { GameMasterAboutComponent } from './game-master-about/game-master-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { GameMasterGamesComponent } from './game-master-games/game-master-games.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameMasterAboutComponent,
    CarritoComponent,
    GameMasterGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
