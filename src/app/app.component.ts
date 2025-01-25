import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { UpnFormComponent } from './upn-form/upn-form.component';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [UpnFormComponent, QRCodeComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public version: string = environment.version;
  public qrCodeValue = signal('');

  qrCodeValueChanged(e: string): void {
    this.qrCodeValue.set(e);
  }
}
