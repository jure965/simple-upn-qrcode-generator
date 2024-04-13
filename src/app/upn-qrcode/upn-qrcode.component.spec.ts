import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpnQrcodeComponent } from './upn-qrcode.component';

describe('UpnQrcodeComponent', () => {
  let component: UpnQrcodeComponent;
  let fixture: ComponentFixture<UpnQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpnQrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpnQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
