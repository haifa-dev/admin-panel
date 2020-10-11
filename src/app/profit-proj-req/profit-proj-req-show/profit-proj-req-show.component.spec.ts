import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitProjReqShowComponent } from './profit-proj-req-show.component';

describe('ProfitProjReqShowComponent', () => {
  let component: ProfitProjReqShowComponent;
  let fixture: ComponentFixture<ProfitProjReqShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitProjReqShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitProjReqShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
