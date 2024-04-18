import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePageTestComponent } from './game-page-test.component';

describe('GamePageTestComponent', () => {
  let component: GamePageTestComponent;
  let fixture: ComponentFixture<GamePageTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePageTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
