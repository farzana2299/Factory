import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRawComponent } from './add-raw.component';

describe('AddRawComponent', () => {
  let component: AddRawComponent;
  let fixture: ComponentFixture<AddRawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRawComponent]
    });
    fixture = TestBed.createComponent(AddRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
