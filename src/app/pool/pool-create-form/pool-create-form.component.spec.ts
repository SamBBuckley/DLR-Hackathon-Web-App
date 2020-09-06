import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolCreateFormComponent } from './pool-create-form.component';

describe('PoolCreateFormComponent', () => {
  let component: PoolCreateFormComponent;
  let fixture: ComponentFixture<PoolCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
