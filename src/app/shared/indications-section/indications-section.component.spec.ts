import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicationsSectionComponent } from './indications-section.component';

describe('IndicationsSectionComponent', () => {
  let component: IndicationsSectionComponent;
  let fixture: ComponentFixture<IndicationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicationsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
