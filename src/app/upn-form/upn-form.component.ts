import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UpnQr } from '../upn-qr';
import parseMoney from 'parse-money';
import { LocalStorageService } from 'ngx-webstorage';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-upn-form',
  templateUrl: './upn-form.component.html',
  styleUrls: ['./upn-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatCheckbox,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpnFormComponent implements OnInit {
  public qrCodeValueChanged = output<string>();

  protected upnQrForm = this.fb.nonNullable.group({
    payerName: ['', [Validators.maxLength(33)]],
    payerAddress: ['', [Validators.maxLength(33)]],
    payerCity: ['', [Validators.maxLength(33)]],
    amount: ['', [Validators.required, Validators.maxLength(11)]],
    purposeCode: [
      'GDSV',
      [Validators.required, Validators.maxLength(4), Validators.minLength(4)],
    ],
    purpose: [
      'Kupoprodaja blaga in storitve',
      [Validators.required, Validators.maxLength(42)],
    ],
    paymentDue: ['', [Validators.maxLength(10), Validators.minLength(10)]],
    payeeIBAN: ['SI56', [Validators.required, Validators.maxLength(34)]],
    payeeReferenceModel: [
      'SI00',
      [Validators.required, Validators.maxLength(4), Validators.minLength(4)],
    ],
    payeeReference: ['', [Validators.required, Validators.maxLength(22)]],
    payeeName: ['', [Validators.maxLength(33)]],
    payeeAddress: ['', [Validators.maxLength(33)]],
    payeeCity: ['', [Validators.maxLength(33)]],
  });
  protected showAll = signal(false);

  constructor(
    private fb: FormBuilder,
    private localSt: LocalStorageService,
  ) {}

  ngOnInit(): void {
    const retrieve = this.localSt.retrieve('lastGeneration');
    if (retrieve) {
      this.upnQrForm.setValue(retrieve);
    }
    this.upnQrForm.valueChanges.subscribe(() => {
      this.onSubmit();
    });
  }

  onSubmit(): void {
    if (this.upnQrForm.invalid) {
      console.log('form is invalid, not generating qr code');
      return;
    }
    this.localSt.store('lastGeneration', this.upnQrForm.value);
    this.qrCodeValueChanged.emit(this.generateQrCodeValue());
  }

  generateQrCodeValue(): string {
    function getAmount(amount: string): string {
      let str = parseMoney(amount.toString())
        ?.amount.toFixed(2)
        .split('.')
        .join('');
      while (str && str.length < 11) {
        str = '0' + str;
      }
      return str || '';
    }

    function getChecksum(d: UpnQr): string {
      let checksum = (
        d.leadingWord.length +
        d.payerIBAN.length +
        d.deposit.length +
        d.withdraw.length +
        d.payerReference.length +
        d.payerName.length +
        d.payerAddress.length +
        d.payerCity.length +
        d.amount.length +
        d.paymentDate.length +
        d.priority.length +
        d.purposeCode.length +
        d.purpose.length +
        d.paymentDue.length +
        d.payeeIBAN.length +
        d.payeeReference.length +
        d.payeeName.length +
        d.payeeAddress.length +
        d.payeeCity.length
      ).toString();
      while (checksum.length < 3) {
        checksum = '0' + checksum;
      }
      return checksum;
    }

    const data = {
      leadingWord: 'UPNQR\n',
      payerIBAN: '\n',
      deposit: '\n',
      withdraw: '\n',
      payerReference: '\n',
      payerName: this.upnQrForm.value.payerName?.trim() + '\n',
      payerAddress: this.upnQrForm.value.payerAddress?.trim() + '\n',
      payerCity: this.upnQrForm.value.payerCity?.trim() + '\n',
      amount: getAmount(`${this.upnQrForm.value.amount}`) + '\n',
      paymentDate: '\n',
      priority: '\n',
      purposeCode: this.upnQrForm.value.purposeCode?.toUpperCase() + '\n',
      purpose: this.upnQrForm.value.purpose?.trim() + '\n',
      paymentDue: this.upnQrForm.value.paymentDue?.trim() + '\n',
      payeeIBAN:
        (this.upnQrForm.value.payeeIBAN as string)
          ?.split(' ')
          .join('')
          .toUpperCase() + '\n',
      payeeReference:
        `${this.upnQrForm.value.payeeReferenceModel}${this.upnQrForm.value.payeeReference}`
          .split(' ')
          .join('')
          .toUpperCase() + '\n',
      payeeName: this.upnQrForm.value.payeeName?.trim() + '\n',
      payeeAddress: this.upnQrForm.value.payeeAddress?.trim() + '\n',
      payeeCity: this.upnQrForm.value.payeeCity?.trim() + '\n',
    } as UpnQr;

    data.checksum = getChecksum(data) + '\n';

    return (
      data.leadingWord +
      data.payerIBAN +
      data.deposit +
      data.withdraw +
      data.payerReference +
      data.payerName +
      data.payerAddress +
      data.payerCity +
      data.amount +
      data.paymentDate +
      data.priority +
      data.purposeCode +
      data.purpose +
      data.paymentDue +
      data.payeeIBAN +
      data.payeeReference +
      data.payeeName +
      data.payeeAddress +
      data.payeeCity +
      data.checksum
    );
  }

  processAmount(): void {
    if (this.upnQrForm.value.amount) {
      const amount = parseMoney(
        this.upnQrForm.value.amount.toString(),
      )?.amount.toFixed(2);
      this.upnQrForm.patchValue({ amount });
    }
  }

  setUppercase(): void {
    const purposeCode = this.upnQrForm.value.purposeCode
      ?.toString()
      .toUpperCase();
    const payeeIBAN = this.upnQrForm.value.payeeIBAN
      ?.toString()
      .toUpperCase()
      .split(' ')
      .join('');
    const payeeReference = this.upnQrForm.value.payeeReference
      ?.toString()
      .toUpperCase()
      .split(' ')
      .join('');
    this.upnQrForm.patchValue({ purposeCode, payeeIBAN, payeeReference });
  }

  showAllChange(): void {
    this.showAll.set(!this.showAll());
  }

  clearForm(): void {
    this.upnQrForm.reset();
    this.qrCodeValueChanged.emit('');
  }
}
