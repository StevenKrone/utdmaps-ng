import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlComponent } from './nl.component';

describe('NlComponent', () => {
  let component: NlComponent;
  let fixture: ComponentFixture<NlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
