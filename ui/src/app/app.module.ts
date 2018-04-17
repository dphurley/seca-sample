import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {GifListComponent} from './gif-list/gif-list.component';
import {GifComponent} from './gif/gif.component';
import {HttpClientModule} from '@angular/common/http';

import {GiphySearchService} from './giphy-search.service';

@NgModule({
  declarations: [
    AppComponent,
    GifListComponent,
    GifComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GiphySearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
