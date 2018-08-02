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
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { TerTransferComponent } from './transactions/ter-transfer/ter-transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    WelcomeMessageComponent,
    TerTransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule
  ],
  providers: [
    ClientInformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
