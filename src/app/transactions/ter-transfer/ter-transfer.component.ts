import { Component, OnInit } from '@angular/core';
import { 
  faUserAlt,
  faEnvelope,
  faPhone,
  faIdCard,
  faMoneyCheck,
  faSquare
} from '@fortawesome/free-solid-svg-icons';
import { TransferService } from './shared/transfer.service';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'bxi-ter-transfer',
  templateUrl: './ter-transfer.component.html',
  styleUrls: ['./ter-transfer.component.scss'],
  providers: [TransferService]
})
export class TerTransferComponent implements OnInit {
  private readonly userId = "123456789";
  faUserAlt = faUserAlt;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faIdCard = faIdCard;
  faMoneyCheck = faMoneyCheck;
  faSquare = faSquare;
  accounts = [];
  notebook = [];
  selectedAccountId = '0';
  formGroup: FormGroup;
  accountControl: AbstractControl;
  amountControl: AbstractControl;
  selectedAccount;
  amount;

  constructor(private readonly transferService: TransferService,
              private readonly formBuilder: FormBuilder) { }

  async ngOnInit() {
    this.formGroup = this.formBuilder.group({
      account: [this.selectedAccountId],
      amount: [this.amount]
    });
    this.accountControl = this.formGroup.controls['account'];
    this.amountControl = this.formGroup.controls['amount'];
    this.accounts = (await this.transferService.getAccounts(this.userId)) || [];
    this.notebook = (await this.transferService.getNotebook(this.userId)) || [];
  }

  onSelectAccount($event) {
    this.selectedAccount = this.accounts.find(account => account.number === $event);
    console.log('account', this.selectedAccount);
  }

}
