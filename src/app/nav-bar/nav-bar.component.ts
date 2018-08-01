import { Component, Input, OnInit } from '@angular/core';
import { ClientInformation } from '../shared/models/client-information.model';
import { faBell, faComment } from '@fortawesome/free-solid-svg-icons';
import { ClientInformationService } from '../shared/services/client-information.service';

@Component({
  selector: 'bxi-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private readonly userId = "123456789";
  clientInformation: ClientInformation;
  faBell = faBell;
  faComment = faComment;

  constructor(private readonly ciService: ClientInformationService) {}

  async ngOnInit() {
    this.clientInformation = await this.ciService.getClientInformation(this.userId);
    console.log('data', this.clientInformation);
  }

}
