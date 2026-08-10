import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHostComponent } from './tab-host.component';

describe('TabHostComponent', () => {
  let component: TabHostComponent;
  let fixture: ComponentFixture<TabHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
