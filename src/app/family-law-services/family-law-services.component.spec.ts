import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLawServicesComponent } from './family-law-services.component';

describe('FamilyLawServicesComponent', () => {
  let component: FamilyLawServicesComponent;
  let fixture: ComponentFixture<FamilyLawServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyLawServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilyLawServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
