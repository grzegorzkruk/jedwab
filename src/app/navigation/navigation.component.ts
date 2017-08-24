import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AppSettings } from './../app.settings';

@Component({
  selector: 'ds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuOpen: boolean;

  publicPath = AppSettings.PUBLIC_PATH;

  constructor(@Inject(DOCUMENT) private oDoc: Document) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu(){
    this.menuOpen = false;
  }

  onMenuClick(e){
    let section = this.oDoc.querySelector(e.srcElement.hash.toString());
    console.log(section);
    let offset = section.offsetTop;
    console.log(offset);
    this.closeMenu();
  }

}
