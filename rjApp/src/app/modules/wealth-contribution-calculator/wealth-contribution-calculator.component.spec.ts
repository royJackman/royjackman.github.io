import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthContributionCalculatorComponent } from './wealth-contribution-calculator.component';

describe('VoteDistributionComponent', () => {
  let component: WealthContributionCalculatorComponent;
  let fixture: ComponentFixture<WealthContributionCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WealthContributionCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthContributionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
