import { Component, ElementRef, AfterViewInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  publicPath = AppSettings.PUBLIC_PATH;

  mapOptions={
    center: {lat: 50.1283729, lng: 8.5713283},
    zoom: 17,
    disableDefaultUI: true,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  }

  slideConfig={
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "adaptiveHeight": false, 
    "dots": false,
    "fade": false
  }
  isStick: boolean = false;

  constructor(private el:ElementRef,  @Inject(DOCUMENT) private oDoc: Document){
    console.log(this.oDoc.body.clientWidth);
    if (768 > this.oDoc.body.clientWidth){
      this.slideConfig.slidesToShow = 1;
      this.mapOptions.center = {lat: 50.1326675, lng: 8.5713454};
    } else if(1000 > this.oDoc.body.clientWidth && 768 < this.oDoc.body.clientWidth) {
      this.slideConfig.slidesToShow = 3;
      this.mapOptions.center = {lat: 50.1283729, lng: 8.5713283};
    } else {
      this.slideConfig.slidesToShow = 4;
      this.mapOptions.center = {lat: 50.1283729, lng: 8.5713283};
    }
  }

  ngAfterViewInit() {
    console.log();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth; 
    console.log(this.oDoc.body.clientWidth);
    if (768 > this.oDoc.body.clientWidth){
      this.slideConfig.slidesToShow = 1;
      this.mapOptions.center = {lat: 50.1283729, lng: 8.5713283};
    } else {
      this.slideConfig.slidesToShow = 4;
      this.mapOptions.center = {lat: 50.1326675, lng: 8.5713454};
    }
    console.log(this.mapOptions.center);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log(event);
    let number = this.oDoc.body.scrollTop;
    if (number > 1) {
      this.isStick = true;
    } else {
      this.isStick = false;
    }
  }

  onMenuClick(e){
    e.preventDefault();
    console.log(e);
    
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
