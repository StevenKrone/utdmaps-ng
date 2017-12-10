import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WstcComponent } from './wstc.component';

describe('WstcComponent', () => {
  let component: WstcComponent;
  let fixture: ComponentFixture<WstcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WstcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WstcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
