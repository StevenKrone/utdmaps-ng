import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ah2Component } from './ah2.component';

describe('Ah2Component', () => {
  let component: Ah2Component;
  let fixture: ComponentFixture<Ah2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ah2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ah2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
