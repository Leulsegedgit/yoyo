import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPage2Component } from './form-page2.component';

describe('FormPage2Component', () => {
  let component: FormPage2Component;
  let fixture: ComponentFixture<FormPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
