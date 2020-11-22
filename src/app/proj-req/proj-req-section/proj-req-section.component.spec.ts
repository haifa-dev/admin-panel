import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjReqSectionComponent } from './proj-req-section.component';

describe('ProjReqSectionComponent', () => {
  let component: ProjReqSectionComponent;
  let fixture: ComponentFixture<ProjReqSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjReqSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjReqSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
