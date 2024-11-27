import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPage3Component } from './services-page3.component';

describe('ServicesPage3Component', () => {
  let component: ServicesPage3Component;
  let fixture: ComponentFixture<ServicesPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPage3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
