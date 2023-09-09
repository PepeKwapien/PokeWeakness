import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityTableComponent } from './ability-table.component';

describe('AbilityTableComponent', () => {
  let component: AbilityTableComponent;
  let fixture: ComponentFixture<AbilityTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilityTableComponent]
    });
    fixture = TestBed.createComponent(AbilityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
