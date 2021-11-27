import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVitrineNum2Component } from './card-vitrine-num2.component';

describe('CardVitrineNum2Component', () => {
  let component: CardVitrineNum2Component;
  let fixture: ComponentFixture<CardVitrineNum2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVitrineNum2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVitrineNum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
