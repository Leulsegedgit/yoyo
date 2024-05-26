import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPage3Component } from './form-page3.component';

describe('FormPage3Component', () => {
  let component: FormPage3Component;
  let fixture: ComponentFixture<FormPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPage3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
