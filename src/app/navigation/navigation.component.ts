import { Component, OnInit } from '@angular/core';
import { AppSettings } from './../app.settings';

@Component({
  selector: 'ds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuOpen: boolean;

  publicPath = AppSettings.PUBLIC_PATH;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu(){
    this.menuOpen = false;
  }

}
