import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodpressureComponent } from './blood-pressure.component';

describe('BloodpressureComponent', () => {
  let component: BloodpressureComponent;
  let fixture: ComponentFixture<BloodpressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodpressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodpressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
