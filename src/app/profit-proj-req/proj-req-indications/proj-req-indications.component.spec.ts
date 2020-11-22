import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjReqIndicationsComponent } from './proj-req-indications.component';

describe('ProjReqIndicationsComponent', () => {
  let component: ProjReqIndicationsComponent;
  let fixture: ComponentFixture<ProjReqIndicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjReqIndicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjReqIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
