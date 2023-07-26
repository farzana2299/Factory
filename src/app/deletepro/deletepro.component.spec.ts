import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproComponent } from './deletepro.component';

describe('DeleteproComponent', () => {
  let component: DeleteproComponent;
  let fixture: ComponentFixture<DeleteproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteproComponent]
    });
    fixture = TestBed.createComponent(DeleteproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
