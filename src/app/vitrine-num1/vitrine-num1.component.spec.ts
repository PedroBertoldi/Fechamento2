import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrineNum1Component } from './vitrine-num1.component';

describe('VitrineNum1Component', () => {
  let component: VitrineNum1Component;
  let fixture: ComponentFixture<VitrineNum1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitrineNum1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrineNum1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
