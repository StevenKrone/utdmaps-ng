import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch6Component } from './ch6.component';

describe('Ch6Component', () => {
  let component: Ch6Component;
  let fixture: ComponentFixture<Ch6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
