import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { environment } from '../environments/environment';
import { ClientInformationService } from './shared/services/client-information.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
  ],
  providers: [
    ClientInformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
