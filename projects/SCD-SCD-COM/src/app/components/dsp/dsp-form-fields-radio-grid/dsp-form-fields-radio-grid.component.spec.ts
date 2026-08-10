import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DspFormFieldsRadioGridComponent } from './dsp-form-fields-radio-grid.component';

describe('DspFormFieldsRadioGridComponent', () => {
  let component: DspFormFieldsRadioGridComponent;
  let fixture: ComponentFixture<DspFormFieldsRadioGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DspFormFieldsRadioGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DspFormFieldsRadioGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
