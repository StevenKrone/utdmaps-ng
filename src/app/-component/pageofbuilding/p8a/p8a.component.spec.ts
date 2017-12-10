import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P8aComponent } from './p8a.component';

describe('P8aComponent', () => {
  let component: P8aComponent;
  let fixture: ComponentFixture<P8aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P8aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P8aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
