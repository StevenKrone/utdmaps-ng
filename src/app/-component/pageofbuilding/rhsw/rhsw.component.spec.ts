import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhswComponent } from './rhsw.component';

describe('RhswComponent', () => {
  let component: RhswComponent;
  let fixture: ComponentFixture<RhswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
