import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpnFormComponent } from './upn-form.component';

describe('UpnFormComponent', () => {
  let component: UpnFormComponent;
  let fixture: ComponentFixture<UpnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
