import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { PushComponent } from './push-not/push.component';
import { PushNotificationsService } from './services/push-notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    PushComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
