import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprovidedComponent } from './serviceprovided.component';

describe('ServiceprovidedComponent', () => {
  let component: ServiceprovidedComponent;
  let fixture: ComponentFixture<ServiceprovidedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceprovidedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceprovidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
