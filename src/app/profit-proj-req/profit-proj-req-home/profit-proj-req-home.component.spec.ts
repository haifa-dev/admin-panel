import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitProjReqHomeComponent } from './profit-proj-req-home.component';

describe('ProfitProjReqHomeComponent', () => {
  let component: ProfitProjReqHomeComponent;
  let fixture: ComponentFixture<ProfitProjReqHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitProjReqHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitProjReqHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
