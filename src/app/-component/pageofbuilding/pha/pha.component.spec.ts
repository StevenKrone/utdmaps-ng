import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaComponent } from './pha.component';

describe('PhaComponent', () => {
  let component: PhaComponent;
  let fixture: ComponentFixture<PhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
