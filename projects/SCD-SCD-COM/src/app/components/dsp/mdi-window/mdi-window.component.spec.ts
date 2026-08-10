import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDIWindowComponent } from './mdi-window.component';

describe('MDIWindowComponent', () => {
  let component: MDIWindowComponent;
  let fixture: ComponentFixture<MDIWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MDIWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDIWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
