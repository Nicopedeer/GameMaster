import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMasterAboutComponent } from './game-master-about.component';

describe('GameMasterAboutComponent', () => {
  let component: GameMasterAboutComponent;
  let fixture: ComponentFixture<GameMasterAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMasterAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMasterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
