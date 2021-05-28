import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';

import localePT from '@angular/common/locales/pt'


registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedComponentsModule
  ],
  providers: [

    {provide: LOCALE_ID, useValue:'PT-BR'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
