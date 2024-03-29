import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpnFormComponent } from './upn-form.component';

describe('UpnFormComponent', () => {
  let component: UpnFormComponent;
  let fixture: ComponentFixture<UpnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
