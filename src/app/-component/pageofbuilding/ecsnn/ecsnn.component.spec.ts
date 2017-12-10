import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcsnnComponent } from './ecsnn.component';

describe('EcsnnComponent', () => {
  let component: EcsnnComponent;
  let fixture: ComponentFixture<EcsnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcsnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcsnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
