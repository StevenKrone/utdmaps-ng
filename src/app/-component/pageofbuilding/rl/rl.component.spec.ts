import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlComponent } from './rl.component';

describe('RlComponent', () => {
  let component: RlComponent;
  let fixture: ComponentFixture<RlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
