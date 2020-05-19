import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRouterWrapperComponent } from './app-router-wrapper.component';

describe('AppRouterWrapperComponent', () => {
  let component: AppRouterWrapperComponent;
  let fixture: ComponentFixture<AppRouterWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRouterWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRouterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
