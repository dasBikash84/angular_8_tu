import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSuccessAlertComponent } from './app-success-alert/app-success-alert.component';
import { AppFailureAlertComponent } from './app-failure-alert/app-failure-alert.component';
import { AssignThreeComponent } from './assign-three/assign-three.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSuccessAlertComponent,
    AppFailureAlertComponent,
    AssignThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
