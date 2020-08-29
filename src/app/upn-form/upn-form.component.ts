import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-upn-form',
  templateUrl: './upn-form.component.html',
  styleUrls: ['./upn-form.component.scss']
})
export class UpnFormComponent implements OnInit {

  upnQrForm = this.fb.group({
    payerName: ['', [Validators.required, Validators.maxLength(33)]],
    payerAddress: ['', [Validators.required, Validators.maxLength(33)]],
    payerCity: ['', [Validators.required, Validators.maxLength(33)]],
    amount: ['', [Validators.required, Validators.maxLength(11)]],
    purposeCode: ['GDSV', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    purpose: ['', [Validators.required, Validators.maxLength(42)]],
    payeeIBAN: ['', [Validators.required, Validators.maxLength(33)]],
    payeeReferenceModel: ['SI00', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    payeeReference: ['', [Validators.required, Validators.maxLength(22)]],
    payeeName: ['', [Validators.required, Validators.maxLength(33)]],
    payeeAddress: ['', [Validators.required, Validators.maxLength(33)]],
    payeeCity: ['', [Validators.required, Validators.maxLength(33)]],
  });

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.upnQrForm.invalid) {
      return;
    }
    console.log(this.upnQrForm.value);
  }
}
