import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakingGuidePageComponent } from './staking-guide-page.component';

describe('StakingGuidePageComponent', () => {
  let component: StakingGuidePageComponent;
  let fixture: ComponentFixture<StakingGuidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakingGuidePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakingGuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
