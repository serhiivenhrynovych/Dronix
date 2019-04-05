import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewModalComponent } from './detail-view-modal.component';

describe('DetailViewModalComponent', () => {
  let component: DetailViewModalComponent;
  let fixture: ComponentFixture<DetailViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
