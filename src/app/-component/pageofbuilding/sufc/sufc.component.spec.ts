import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SufcComponent } from './sufc.component';

describe('SufcComponent', () => {
  let component: SufcComponent;
  let fixture: ComponentFixture<SufcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SufcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SufcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
