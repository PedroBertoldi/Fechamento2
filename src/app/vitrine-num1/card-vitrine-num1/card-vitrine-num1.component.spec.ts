import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVitrineNum1Component } from './card-vitrine-num1.component';

describe('CardVitrineNum1Component', () => {
  let component: CardVitrineNum1Component;
  let fixture: ComponentFixture<CardVitrineNum1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVitrineNum1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVitrineNum1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
