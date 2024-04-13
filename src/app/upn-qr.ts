export interface UpnQr {
  leadingWord: string;    // 1
  payerIBAN: string;      // 2
  deposit: string;        // 3
  withdraw: string;       // 4
  payerReference: string; // 5
  payerName: string;      // 6
  payerAddress: string;   // 7
  payerCity: string;      // 8
  amount: string;         // 9
  paymentDate: string;    // 10
  priority: string;       // 11
  purposeCode: string;    // 12
  purpose: string;        // 13
  paymentDue: string;     // 14
  payeeIBAN: string;      // 15
  payeeReference: string; // 16
  payeeName: string;      // 17
  payeeAddress: string;   // 18
  payeeCity: string;      // 19
  checksum: string;       // 20
}
