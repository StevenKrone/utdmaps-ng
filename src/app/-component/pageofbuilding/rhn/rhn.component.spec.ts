import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhnComponent } from './rhn.component';

describe('RhnComponent', () => {
  let component: RhnComponent;
  let fixture: ComponentFixture<RhnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
