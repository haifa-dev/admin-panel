import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjReqHeaderComponent } from './proj-req-header.component';

describe('ProjReqHeaderComponent', () => {
  let component: ProjReqHeaderComponent;
  let fixture: ComponentFixture<ProjReqHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjReqHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjReqHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
