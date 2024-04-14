import {Component, OnInit} from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { UpnFormComponent } from './upn-form/upn-form.component';
import {environment} from "../environments/environment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [UpnFormComponent, QRCodeModule],
})
export class AppComponent implements OnInit {
  public version: string = environment.version;
  public qrCodeValue: string = '';

  ngOnInit(): void {
    this.qrCodeValue = '';
  }

  qrCodeValueChanged(e: string): void {
    this.qrCodeValue = e;
  }
}
