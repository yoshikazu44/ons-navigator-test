import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { OnsNavigator, Params } from 'ngx-onsenui';

import { PageComponent } from '../page/page.component';
@Component({
  selector: 'ons-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit, OnChanges {


  constructor(private _navigator: OnsNavigator) {
    // console.log(_navigator.element.options);
  }

  ngOnInit(): void {
    console.log('DefaultPage ngOnInit');
    console.log(this._navigator.element);
    console.log(Object.keys(this._navigator.element));
    this._navigator.element.addEventListener("prepush", function(e) {
      console.log("event prepush");
      console.log(e);
    })
    this._navigator.element.addEventListener("prepop", function(e) {
      console.log("event prepop");
      console.log(e);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DefaultPage ngOnChanges');
  }

  push() {
    this._navigator.element.pushPage(PageComponent, {data: {hoge: "fuga"}}); 
  } 
}
