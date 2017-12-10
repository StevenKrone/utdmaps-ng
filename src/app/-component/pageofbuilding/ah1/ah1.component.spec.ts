import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ah1Component } from './ah1.component';

describe('Ah1Component', () => {
  let component: Ah1Component;
  let fixture: ComponentFixture<Ah1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ah1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ah1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
