import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaytimeComponent } from './playtime.component';

describe('PlaytimeComponent', () => {
  let component: PlaytimeComponent;
  let fixture: ComponentFixture<PlaytimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaytimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
