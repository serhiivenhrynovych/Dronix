import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryDemoComponent } from './galery-demo.component';

describe('GaleryDemoComponent', () => {
  let component: GaleryDemoComponent;
  let fixture: ComponentFixture<GaleryDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
