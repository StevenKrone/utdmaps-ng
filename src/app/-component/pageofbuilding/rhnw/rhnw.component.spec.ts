import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhnwComponent } from './rhnw.component';

describe('RhnwComponent', () => {
  let component: RhnwComponent;
  let fixture: ComponentFixture<RhnwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhnwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhnwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
