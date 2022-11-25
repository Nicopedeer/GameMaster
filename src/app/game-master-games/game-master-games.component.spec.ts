import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMasterGamesComponent } from './game-master-games.component';

describe('GameMasterGamesComponent', () => {
  let component: GameMasterGamesComponent;
  let fixture: ComponentFixture<GameMasterGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMasterGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMasterGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
