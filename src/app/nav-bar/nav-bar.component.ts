import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ClientInformation } from '../shared/models/client-information.model';
import { faBell, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bxi-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  @Input() clientInformation: ClientInformation;
  faBell = faBell;
  faComment = faComment;
}
