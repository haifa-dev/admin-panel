import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitProjReqListComponent } from './profit-proj-req-list.component';

describe('ProfitProjReqListComponent', () => {
  let component: ProfitProjReqListComponent;
  let fixture: ComponentFixture<ProfitProjReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitProjReqListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitProjReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
