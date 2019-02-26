import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgxStrapiLibModule } from '../../dist/ngx-strapi-lib';
import { NgxStrapiLibService } from '../../dist/ngx-strapi-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgxStrapiLibModule
  ],
  providers: [ NgxStrapiLibService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
