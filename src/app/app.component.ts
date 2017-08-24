import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';

import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  publicPath = AppSettings.PUBLIC_PATH;

  slideConfig={
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "adaptiveHeight": false, 
    "dots": false,
    "fade": false
  }

  constructor(private el:ElementRef){}

  ngAfterViewInit() {
    console.log(this.el.nativeElement);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth; 
    console.log(event.target.innerWidth);
    if (768 > event.target.innerWidth){
      this.slideConfig.slidesToShow = 1;
      console.log(this.slideConfig.slidesToShow)
    } else {
      this.slideConfig.slidesToShow = 4;
    }
    
  }

  productions = [
    {
      img: "assets/produktion/Produktion(1).png"
    },
    {
      img: "assets/produktion/Produktion(2).png"
    },
    {
      img: "assets/produktion/Produktion(3).png"
    },
    {
      img: "assets/produktion/Produktion(4).png"
    },
    {
      img: "assets/produktion/Produktion(5).png"
    },
    {
      img: "assets/produktion/Produktion(6).png"
    },
    {
      img: "assets/produktion/Produktion(7).png"
    },
    {
      img: "assets/produktion/Produktion(8).png"
    },
    {
      img: "assets/produktion/Produktion(9).png"
    },
    {
      img: "assets/produktion/Produktion(10).png"
    },
    {
      img: "assets/produktion/Produktion(11).png"
    },
    {
      img: "assets/produktion/Produktion(12).png"
    },
  ];

  products = [
    {
      img: "assets/products/Farben1.png"
    },
    {
      img: "assets/products/Farben2.png"
    },
    {
      img: "assets/products/Farben3.png"
    },
    {
      img: "assets/products/Farben4.png"
    },
    {
      img: "assets/products/Farben5.png"
    },
    {
      img: "assets/products/Farben6.png"
    },
    {
      img: "assets/products/Farben7.png"
    },
    {
      img: "assets/products/Farben8.png"
    },
    {
      img: "assets/products/Farben9.png"
    },
    {
      img: "assets/products/Farben10.png"
    },
    {
      img: "assets/products/Farben11.png"
    },
    {
      img: "assets/products/Farben12.png"
    },
    {
      img: "assets/products/Farben13.png"
    },
    {
      img: "assets/products/Farben14.png"
    },
    {
      img: "assets/products/Farben15.png"
    },
    {
      img: "assets/products/Farben16.png"
    },
    {
      img: "assets/products/Farben17.png"
    },
    {
      img: "assets/products/Farben18.png"
    },
    {
      img: "assets/products/Farben19.png"
    }
  ];

  title = 'app';
}
