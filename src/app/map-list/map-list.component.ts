import { Component, OnInit } from '@angular/core';
import { AppSettings } from './../app.settings';

@Component({
  selector: 'ds-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent implements OnInit {

  publicPath = AppSettings.PUBLIC_PATH;

  languages = [
    {
      map: 'assets/flags/germany.png',
      type: 'ger'
    },
    {
      map: 'assets/flags/germany.png',
      type: 'ang'
    },
  ]

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleList(){
    this.isOpen = !this.isOpen;
  }

}
