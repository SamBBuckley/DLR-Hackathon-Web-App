import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteButtonComponent } from './user-delete-button.component';

describe('UserDeleteButtonComponent', () => {
  let component: UserDeleteButtonComponent;
  let fixture: ComponentFixture<UserDeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeleteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
