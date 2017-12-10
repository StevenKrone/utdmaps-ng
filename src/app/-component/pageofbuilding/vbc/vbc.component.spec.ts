import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbcComponent } from './vbc.component';

describe('VbcComponent', () => {
  let component: VbcComponent;
  let fixture: ComponentFixture<VbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
