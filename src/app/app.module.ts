import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';

import { SlickModule } from 'ngx-slick';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MapListComponent } from './map-list/map-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    ImageCarouselComponent,
    MapListComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
