import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalProgramBalanceComponent } from './national-program-balance.component';

describe('VoteDistributionComponent', () => {
  let component: NationalProgramBalanceComponent;
  let fixture: ComponentFixture<NationalProgramBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalProgramBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalProgramBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
