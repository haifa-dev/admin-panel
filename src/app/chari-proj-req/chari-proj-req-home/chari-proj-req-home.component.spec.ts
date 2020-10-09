import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariProjReqHomeComponent } from './chari-proj-req-home.component';

describe('ChariProjReqHomeComponent', () => {
  let component: ChariProjReqHomeComponent;
  let fixture: ComponentFixture<ChariProjReqHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChariProjReqHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariProjReqHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
