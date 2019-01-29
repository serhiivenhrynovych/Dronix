import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './slider/slider.component';
import {NgxHmCarouselModule} from 'ngx-hm-carousel';
import {FormsModule} from '@angular/forms';
import {MatDialogModule, MatIconModule} from '@angular/material';
import {GaleryComponent} from './galery/galery.component';
import {GaleryDemoComponent} from './galery-demo/galery-demo.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    GaleryComponent,
    GaleryDemoComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHmCarouselModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SliderComponent,
    GaleryDemoComponent
  ]
})
export class AppModule {
}
