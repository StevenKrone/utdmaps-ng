import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhwComponent } from './dhw.component';

describe('DhwComponent', () => {
  let component: DhwComponent;
  let fixture: ComponentFixture<DhwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
