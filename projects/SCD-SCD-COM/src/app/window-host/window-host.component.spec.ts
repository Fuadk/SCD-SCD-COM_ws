import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowHostComponent } from './window-host.component';

describe('WindowHostComponent', () => {
  let component: WindowHostComponent;
  let fixture: ComponentFixture<WindowHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WindowHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
