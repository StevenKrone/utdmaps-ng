import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsomComponent } from './jsom.component';

describe('JsomComponent', () => {
  let component: JsomComponent;
  let fixture: ComponentFixture<JsomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
