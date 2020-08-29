import {Component, Input, OnInit} from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import {NgxQrcodeVersionType} from '@techiediaries/ngx-qrcode/lib/qrcode.types';

@Component({
  selector: 'app-upn-qrcode',
  templateUrl: './upn-qrcode.component.html',
  styleUrls: ['./upn-qrcode.component.scss']
})
export class UpnQrcodeComponent implements OnInit {

  @Input()
  get upnQrCodeString(): string { return this.value; }
  set upnQrCodeString(upnQrCodeString: string) { this.value = upnQrCodeString; }

  elementType = NgxQrcodeElementTypes.CANVAS;
  value = 'testing it out';
  eccLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;
  version = '15' as NgxQrcodeVersionType;
  scale = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
