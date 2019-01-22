import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './slider/slider.component';
import {NgxHmCarouselModule} from 'ngx-hm-carousel';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHmCarouselModule,
    FormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SliderComponent
  ]
})
export class AppModule { }
