import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSuccessAlertComponent } from './app-success-alert/app-success-alert.component';
import { AppFailureAlertComponent } from './app-failure-alert/app-failure-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSuccessAlertComponent,
    AppFailureAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
