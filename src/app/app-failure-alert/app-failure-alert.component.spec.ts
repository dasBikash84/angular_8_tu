import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFailureAlertComponent } from './app-failure-alert.component';

describe('AppFailureAlertComponent', () => {
  let component: AppFailureAlertComponent;
  let fixture: ComponentFixture<AppFailureAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFailureAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFailureAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
