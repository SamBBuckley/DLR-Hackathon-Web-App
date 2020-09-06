import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolModifyComponent } from './pool-modify.component';

describe('PoolModifyComponent', () => {
  let component: PoolModifyComponent;
  let fixture: ComponentFixture<PoolModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
