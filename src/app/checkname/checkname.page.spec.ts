import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecknamePage } from './checkname.page';

describe('ChecknamePage', () => {
  let component: ChecknamePage;
  let fixture: ComponentFixture<ChecknamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecknamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecknamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
