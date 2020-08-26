import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutComponent } from './card-layout.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

describe('CardLayoutComponent', () => {
  let component: CardLayoutComponent;
  let fixture: ComponentFixture<CardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLayoutComponent ],
      schemas: [NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLayoutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have row classed container', () => {
    expect(fixture.debugElement.query(By.css('row'))).toBeTruthy();
  });

  it('should have row classed container', () => {
    let elem: DebugElement = fixture.debugElement.query(By.css('row'));
    expect(elem).toBeTruthy();
  });
});
