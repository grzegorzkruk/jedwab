import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleList(){
    this.isOpen = !this.isOpen;
  }

}
