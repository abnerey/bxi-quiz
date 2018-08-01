import { Component, OnInit } from '@angular/core';
import { ClientInformationService } from '../shared/services/client-information.service';
import { ClientInformation } from '../shared/models/client-information.model';

@Component({
  selector: 'bxi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private readonly userId = "123456789";
  clientInformation: ClientInformation;

  constructor(private readonly ciService: ClientInformationService) { }

  async ngOnInit() {
    this.clientInformation = await this.ciService.getClientInformation(this.userId);
  }

}
