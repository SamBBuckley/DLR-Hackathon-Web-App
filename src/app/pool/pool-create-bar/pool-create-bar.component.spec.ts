import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolCreateBarComponent } from './pool-create-bar.component';

describe('PoolCreateBarComponent', () => {
  let component: PoolCreateBarComponent;
  let fixture: ComponentFixture<PoolCreateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolCreateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolCreateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
