import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariProjReqListComponent } from './chari-proj-req-list.component';

describe('ChariProjReqListComponent', () => {
  let component: ChariProjReqListComponent;
  let fixture: ComponentFixture<ChariProjReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChariProjReqListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariProjReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
