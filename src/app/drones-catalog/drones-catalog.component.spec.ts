import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesCatalogComponent } from './drones-catalog.component';

describe('DronesCatalogComponent', () => {
  let component: DronesCatalogComponent;
  let fixture: ComponentFixture<DronesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
