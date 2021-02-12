import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMessagesComponent } from './manage-messages.component';

describe('ManageMessagesComponent', () => {
  let component: ManageMessagesComponent;
  let fixture: ComponentFixture<ManageMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
