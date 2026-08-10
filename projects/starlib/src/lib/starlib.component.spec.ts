import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarlibComponent } from './starlib.component';

describe('StarlibComponent', () => {
  let component: StarlibComponent;
  let fixture: ComponentFixture<StarlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarlibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
