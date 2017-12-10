import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcwComponent } from './rcw.component';

describe('RcwComponent', () => {
  let component: RcwComponent;
  let fixture: ComponentFixture<RcwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
