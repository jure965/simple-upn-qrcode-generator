import {Component, OnInit} from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { UpnFormComponent } from './upn-form/upn-form.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [UpnFormComponent, QRCodeModule],
})
export class AppComponent implements OnInit {
  title = 'simple-upn-qrcode-generator';
  qrCodeValue = '';

  ngOnInit(): void {
    this.qrCodeValue = '';
  }

  qrCodeValueChanged(e: string): void {
    this.qrCodeValue = e;
  }
}
