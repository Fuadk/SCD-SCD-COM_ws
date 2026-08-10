import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDspOrdersAddComponent } from './app-dsp-orders-add.component';

describe('AppDspOrdersAddComponent', () => {
  let component: AppDspOrdersAddComponent;
  let fixture: ComponentFixture<AppDspOrdersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDspOrdersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDspOrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
