import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { OnsNavigator, Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnChanges {

  constructor(private _navigator: OnsNavigator, private _params: Params) {
    console.log('parameters:', _params.data);
  }

  ngOnInit(): void {
    console.log('Page onInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DefaultPage ngOnChanges');
  }

  push() {
    this._navigator.element.pushPage(PageComponent, {animation: 'slide', data: {aaa: 'bbb'}});
  }

  pop() {
    this._navigator.element.popPage();
  }

}
