import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjReqDocNotFoundComponent } from './proj-req-doc-not-found.component';

describe('ProjReqDocNotFoundComponent', () => {
  let component: ProjReqDocNotFoundComponent;
  let fixture: ComponentFixture<ProjReqDocNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjReqDocNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjReqDocNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
