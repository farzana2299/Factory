import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrawComponent } from './viewraw.component';

describe('ViewrawComponent', () => {
  let component: ViewrawComponent;
  let fixture: ComponentFixture<ViewrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewrawComponent]
    });
    fixture = TestBed.createComponent(ViewrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
