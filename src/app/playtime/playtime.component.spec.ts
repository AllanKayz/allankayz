import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaytimeComponent } from './playtime.component';

describe('PlaytimeComponent', () => {
  let component: PlaytimeComponent;
  let fixture: ComponentFixture<PlaytimeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PlaytimeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
