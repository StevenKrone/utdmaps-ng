import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoComponent } from './fo.component';

describe('FoComponent', () => {
  let component: FoComponent;
  let fixture: ComponentFixture<FoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
