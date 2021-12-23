import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';''

import { OnsenModule } from 'ngx-onsenui';
import * as ons from 'onsenui';

import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    PageComponent
  ],
  entryComponents: [
    DefaultPageComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
    ons.disableAutoStyling();
  }
}
