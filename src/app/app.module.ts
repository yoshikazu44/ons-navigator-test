import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';''

import { OnsenModule } from 'ngx-onsenui';
import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { PageComponent } from './page/page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
