import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolLandingComponent } from './pool-landing.component';

describe('PoolLandingComponent', () => {
  let component: PoolLandingComponent;
  let fixture: ComponentFixture<PoolLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
