import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedisplayComponent } from './routedisplay.component';

describe('RoutedisplayComponent', () => {
  let component: RoutedisplayComponent;
  let fixture: ComponentFixture<RoutedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
