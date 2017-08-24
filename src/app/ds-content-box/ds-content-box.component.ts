import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from './../app.settings';

@Component({
  selector: 'ds-content-box',
  templateUrl: './ds-content-box.component.html',
  styleUrls: ['./ds-content-box.component.scss']
})
export class DsContentBoxComponent implements OnInit {

  publicPath = AppSettings.PUBLIC_PATH;

  @Input('title') title:string;
  @Input('bodyBg') bodyBg: boolean;

  constructor() { }

  ngOnInit() {
  }

}
