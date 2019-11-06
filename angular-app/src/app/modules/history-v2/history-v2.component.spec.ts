import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryV2Component } from './history-v2.component';

describe('HistoryV2Component', () => {
  let component: HistoryV2Component;
  let fixture: ComponentFixture<HistoryV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
