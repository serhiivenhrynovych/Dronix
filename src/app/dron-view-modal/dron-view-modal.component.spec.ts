import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronViewModalComponent } from './dron-view-modal.component';

describe('DronViewModalComponent', () => {
  let component: DronViewModalComponent;
  let fixture: ComponentFixture<DronViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
