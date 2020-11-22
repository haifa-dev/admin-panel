import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjReqItemComponent } from './proj-req-item.component';

describe('ProjReqItemComponent', () => {
  let component: ProjReqItemComponent;
  let fixture: ComponentFixture<ProjReqItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjReqItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjReqItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
