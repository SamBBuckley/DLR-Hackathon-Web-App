import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolDeleteButtonComponent } from './pool-delete-button.component';

describe('PoolDeleteButtonComponent', () => {
  let component: PoolDeleteButtonComponent;
  let fixture: ComponentFixture<PoolDeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolDeleteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
