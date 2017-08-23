import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  slides = [
    {
      img: "http://placehold.it/350x150/000000",
      text: "Lorem Lorem"
    },
    {
      img: "http://placehold.it/350x150/000000",
      text: "Lorem Lorem 2"
    },
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
