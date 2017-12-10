import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpnComponent } from './spn.component';

describe('SpnComponent', () => {
  let component: SpnComponent;
  let fixture: ComponentFixture<SpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
