import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcsssComponent } from './ecsss.component';

describe('EcsssComponent', () => {
  let component: EcsssComponent;
  let fixture: ComponentFixture<EcsssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcsssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
