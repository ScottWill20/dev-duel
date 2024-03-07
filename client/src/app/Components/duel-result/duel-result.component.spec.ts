import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelResultComponent } from './duel-result.component';

describe('DuelResultComponent', () => {
  let component: DuelResultComponent;
  let fixture: ComponentFixture<DuelResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuelResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuelResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
