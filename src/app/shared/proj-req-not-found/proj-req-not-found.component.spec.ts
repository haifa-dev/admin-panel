import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjReqNotFoundComponent } from './proj-req-not-found.component';

describe('ProjReqNotFoundComponent', () => {
  let component: ProjReqNotFoundComponent;
  let fixture: ComponentFixture<ProjReqNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjReqNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjReqNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
