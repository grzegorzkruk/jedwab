import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';

import { SlickModule } from 'ngx-slick';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MapListComponent } from './map-list/map-list.component';
import { DsContentBoxComponent } from './ds-content-box/ds-content-box.component';
import { DsContactFormComponent } from './ds-contact-form/ds-contact-form.component';
import { NguiMapModule } from '@ngui/map';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    ImageCarouselComponent,
    MapListComponent,
    DsContentBoxComponent,
    DsContactFormComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyD7F1DLtiFxFWSHvpkul-6RtdrsJ-LiIdI'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
