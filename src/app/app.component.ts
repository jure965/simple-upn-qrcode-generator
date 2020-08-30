import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simple-upn-qrcode-generator';
  qrCodeValue = '';

  ngOnInit(): void {
    this.qrCodeValue = '';
  }

  qrCodeValueChanged(e): void {
    this.qrCodeValue = e;
  }
}
