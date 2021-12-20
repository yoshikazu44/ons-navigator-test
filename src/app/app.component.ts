import { Component, ViewChild, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { DefaultPageComponent } from './default-page/default-page.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page = DefaultPageComponent

  // null になる
  @ViewChild(OnsNavigator) navigator:OnsNavigator;

  ngOnInit(): void {
  }

  prepush(): void {
    console.log('prepush');
  }
}
