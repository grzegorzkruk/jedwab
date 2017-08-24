import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-burger',
  templateUrl: './btn-burger.component.html',
  styleUrls: ['./btn-burger.component.scss']
})
export class BtnBurgerComponent implements OnInit {

  @Input('toggled') toggled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
