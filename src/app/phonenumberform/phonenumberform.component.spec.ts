import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumberformComponent } from './phonenumberform.component';

describe('PhonenumberformComponent', () => {
  let component: PhonenumberformComponent;
  let fixture: ComponentFixture<PhonenumberformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonenumberformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonenumberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
