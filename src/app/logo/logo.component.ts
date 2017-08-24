import { Component, OnInit } from '@angular/core';
import { AppSettings } from './../app.settings';

@Component({
  selector: 'ds-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  publicPath = AppSettings.PUBLIC_PATH;

  constructor() { }

  ngOnInit() {
  }

}
