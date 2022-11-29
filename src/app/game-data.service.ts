import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game } from './Game';

const URL = "https://6385ed96875ca3273d4a7996.mockapi.io/Game";

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http : HttpClient) { }

  public getAll() : Observable<Game[]>{
     return this.http.get<Game[]>(URL)
              .pipe(
                tap((games : Game[]) => games.forEach(game => game.cantidad = 0 ))
              );
  }


}

