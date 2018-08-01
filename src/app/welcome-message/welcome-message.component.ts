import { Component, OnInit } from '@angular/core';
import { ClientInformationService } from '../shared/services/client-information.service';
import { ClientInformation } from '../shared/models/client-information.model';

@Component({
  selector: 'bxi-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent implements OnInit {
  private readonly userId = "123456789";
  clientInformation: ClientInformation;

  constructor(private readonly ciService: ClientInformationService) { }

  async ngOnInit() {
    this.clientInformation = await this.ciService.getClientInformation(this.userId);
  }

}
