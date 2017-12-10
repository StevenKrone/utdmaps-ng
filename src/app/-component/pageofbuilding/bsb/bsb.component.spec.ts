import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbComponent } from './bsb.component';

describe('BsbComponent', () => {
  let component: BsbComponent;
  let fixture: ComponentFixture<BsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
