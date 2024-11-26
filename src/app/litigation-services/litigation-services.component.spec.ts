import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationServicesComponent } from './litigation-services.component';

describe('LitigationServicesComponent', () => {
  let component: LitigationServicesComponent;
  let fixture: ComponentFixture<LitigationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitigationServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LitigationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
