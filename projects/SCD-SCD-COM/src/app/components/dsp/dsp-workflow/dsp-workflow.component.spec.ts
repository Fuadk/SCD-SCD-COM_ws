import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DspWorkFlowComponent } from './dsp-workflow.component';

describe('DspWorkFlowComponent', () => {
  let component: DspWorkFlowComponent;
  let fixture: ComponentFixture<DspWorkFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DspWorkFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DspWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
