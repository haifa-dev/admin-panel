import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjReqAttachmentsComponent } from './proj-req-attachments.component';

describe('ProjReqAttachmentsComponent', () => {
  let component: ProjReqAttachmentsComponent;
  let fixture: ComponentFixture<ProjReqAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjReqAttachmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjReqAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
