import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentSectionComponent } from './attachment-section.component';

describe('AttachmentSectionComponent', () => {
  let component: AttachmentSectionComponent;
  let fixture: ComponentFixture<AttachmentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
