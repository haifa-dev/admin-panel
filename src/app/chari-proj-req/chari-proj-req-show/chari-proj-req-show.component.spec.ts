import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariProjReqShowComponent } from './chari-proj-req-show.component';

describe('ChariProjReqShowComponent', () => {
  let component: ChariProjReqShowComponent;
  let fixture: ComponentFixture<ChariProjReqShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChariProjReqShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariProjReqShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
