import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x350/333333"},
    {img: "http://placehold.it/350x150/666666"}
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
    this.slides.push({img: "http://placehold.it/350x150/777777"})
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
