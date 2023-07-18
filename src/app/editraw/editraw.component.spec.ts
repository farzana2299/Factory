import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrawComponent } from './editraw.component';

describe('EditrawComponent', () => {
  let component: EditrawComponent;
  let fixture: ComponentFixture<EditrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrawComponent]
    });
    fixture = TestBed.createComponent(EditrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
