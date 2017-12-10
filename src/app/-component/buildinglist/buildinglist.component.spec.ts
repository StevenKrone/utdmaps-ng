import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildinglistComponent } from './buildinglist.component';

describe('BuildinglistComponent', () => {
  let component: BuildinglistComponent;
  let fixture: ComponentFixture<BuildinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
