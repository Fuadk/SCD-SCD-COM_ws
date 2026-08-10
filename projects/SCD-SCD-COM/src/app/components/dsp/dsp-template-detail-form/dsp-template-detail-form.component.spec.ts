import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DspTemplateDetailFormComponent } from './dsp-template-detail-form.component';

describe('DspTemplateDetailFormComponent', () => {
  let component: DspTemplateDetailFormComponent;
  let fixture: ComponentFixture<DspTemplateDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DspTemplateDetailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DspTemplateDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
