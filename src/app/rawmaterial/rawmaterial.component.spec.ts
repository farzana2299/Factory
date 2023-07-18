import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialComponent } from './rawmaterial.component';

describe('RawmaterialComponent', () => {
  let component: RawmaterialComponent;
  let fixture: ComponentFixture<RawmaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawmaterialComponent]
    });
    fixture = TestBed.createComponent(RawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
