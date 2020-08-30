import {Component, Input, OnInit} from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import {NgxQrcodeVersionType} from '@techiediaries/ngx-qrcode/lib/qrcode.types';

@Component({
  selector: 'app-upn-qrcode',
  templateUrl: './upn-qrcode.component.html',
  styleUrls: ['./upn-qrcode.component.scss']
})
export class UpnQrcodeComponent implements OnInit {

  @Input() value = 'testing it out';
  elementType = NgxQrcodeElementTypes.CANVAS;
  eccLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;
  version = '15' as NgxQrcodeVersionType;
  scale = 6;
  margin = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
