import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUpdateFormComponent } from './pool-update-form.component';

describe('PoolUpdateFormComponent', () => {
  let component: PoolUpdateFormComponent;
  let fixture: ComponentFixture<PoolUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
