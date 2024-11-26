import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailApplicationsComponent } from './bail-applications.component';

describe('BailApplicationsComponent', () => {
  let component: BailApplicationsComponent;
  let fixture: ComponentFixture<BailApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BailApplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BailApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
