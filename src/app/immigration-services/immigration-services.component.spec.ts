import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationServicesComponent } from './immigration-services.component';

describe('ImmigrationServicesComponent', () => {
  let component: ImmigrationServicesComponent;
  let fixture: ComponentFixture<ImmigrationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmigrationServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmigrationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
