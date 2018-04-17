import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {GifListComponent} from './gif-list/gif-list.component';
import {GifComponent} from './gif/gif.component';
import {HttpClientModule} from '@angular/common/http';

import {GiphySearchService} from './giphy-search.service';
import {GifSearchComponent} from './gif-search/gif-search.component';
import {FormsModule} from '@angular/forms';
import {FavoriteGifService} from './favorite-gif.service';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    GifListComponent,
    GifComponent,
    GifSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GiphySearchService,
    FavoriteGifService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
