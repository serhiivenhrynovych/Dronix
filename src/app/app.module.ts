import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './slider/slider.component';
import {NgxHmCarouselModule} from 'ngx-hm-carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule} from '@angular/material';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DronViewModalComponent } from './dron-view-modal/dron-view-modal.component';
import { DetailViewModalComponent } from './detail-view-modal/detail-view-modal.component';
import { DronesCatalogComponent } from './drones-catalog/drones-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FooterComponent,
    ServiceComponent,
    CatalogComponent,
    DronViewModalComponent,
    DetailViewModalComponent,
    DronesCatalogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgxHmCarouselModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJ5WxmMRuCDFQVuCXGWvWnexnNAzyWb78'
    }),
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SliderComponent,
    DronViewModalComponent,
    DetailViewModalComponent
  ]
})
export class AppModule {
}
