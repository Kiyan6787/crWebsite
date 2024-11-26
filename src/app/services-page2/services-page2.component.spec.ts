import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPage2Component } from './services-page2.component';

describe('ServicesPage2Component', () => {
  let component: ServicesPage2Component;
  let fixture: ComponentFixture<ServicesPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
