import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiListModalComponent } from './poi-list-modal.component';

describe('PoiListModalComponent', () => {
  let component: PoiListModalComponent;
  let fixture: ComponentFixture<PoiListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiListModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
