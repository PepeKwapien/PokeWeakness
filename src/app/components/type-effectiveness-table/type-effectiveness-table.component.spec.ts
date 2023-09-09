import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEffectivenessTableComponent } from './type-effectiveness-table.component';

describe('TypeEffectivenessTableComponent', () => {
  let component: TypeEffectivenessTableComponent;
  let fixture: ComponentFixture<TypeEffectivenessTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeEffectivenessTableComponent]
    });
    fixture = TestBed.createComponent(TypeEffectivenessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
