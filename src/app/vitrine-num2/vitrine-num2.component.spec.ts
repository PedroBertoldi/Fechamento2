import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrineNum2Component } from './vitrine-num2.component';

describe('VitrineNum2Component', () => {
  let component: VitrineNum2Component;
  let fixture: ComponentFixture<VitrineNum2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitrineNum2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrineNum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
