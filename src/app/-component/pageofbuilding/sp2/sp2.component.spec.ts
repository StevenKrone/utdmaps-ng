import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp2Component } from './sp2.component';

describe('Sp2Component', () => {
  let component: Sp2Component;
  let fixture: ComponentFixture<Sp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
