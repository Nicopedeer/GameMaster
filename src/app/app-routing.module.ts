import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameMasterAboutComponent } from './game-master-about/game-master-about.component';
import { GameMasterGamesComponent } from './game-master-games/game-master-games.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameMasterGamesComponent
  },
  {
    path: 'about',
    component: GameMasterAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
