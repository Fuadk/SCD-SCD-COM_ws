import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DspEkycComponent } from './dsp-ekyc.component';

describe('DspEkycComponent', () => {
  let component: DspEkycComponent;
  let fixture: ComponentFixture<DspEkycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DspEkycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DspEkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
