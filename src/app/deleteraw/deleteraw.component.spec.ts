import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterawComponent } from './deleteraw.component';

describe('DeleterawComponent', () => {
  let component: DeleterawComponent;
  let fixture: ComponentFixture<DeleterawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleterawComponent]
    });
    fixture = TestBed.createComponent(DeleterawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
