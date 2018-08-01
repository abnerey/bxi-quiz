import { Component, OnInit } from '@angular/core';
import { ClientInformation } from './shared/models/client-information.model';
import { ClientInformationService } from './shared/services/client-information.service';

@Component({
  selector: 'bxi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly userId = "123456789";
  clientInformation: ClientInformation;

  constructor(private readonly ciService: ClientInformationService) {
  }

  async ngOnInit() {
    this.clientInformation = await this.ciService.getClientInformation(this.userId);
    console.log('data', this.clientInformation);
  }

}
