import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhwComponent } from './rhw.component';

describe('RhwComponent', () => {
  let component: RhwComponent;
  let fixture: ComponentFixture<RhwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
