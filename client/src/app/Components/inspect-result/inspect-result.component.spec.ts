import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectResultComponent } from './inspect-result.component';

describe('InspectResultComponent', () => {
  let component: InspectResultComponent;
  let fixture: ComponentFixture<InspectResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
