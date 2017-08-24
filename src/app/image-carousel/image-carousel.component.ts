import { Component, OnInit } from '@angular/core';
import { AppSettings } from './../app.settings';

@Component({
  selector: 'ds-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  publicPath = AppSettings.PUBLIC_PATH;

  background = "../../assets/img/bg-header.png";

  slides = [
    {
      img: "assets/img/silk.png",
      text: "Lorem ipsum et todore Proin iaculis purus digni consequat sem digni ssim. Lorem ipsum et todore Proin iaculis purus digni consequat sem digni ssim. Lorem ipsum et todore Proin iaculis purus digni consequat sem digni ssim. Lorem ipsum et todore Proin iaculis purus digni consequat sem digni ssim. "
    }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "adaptiveHeight": true, 
    "dots": true,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "fade": true
  };
 
  addSlide() {
    this.slides.push({
      img: "http://placehold.it/350x150/777777",
      text: ""
    })
  }
 
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
 
  afterChange(e) {
    console.log('afterChange');
  }

  constructor() { }

  ngOnInit() {
  }

}
