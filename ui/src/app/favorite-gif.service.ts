import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FavoriteGifService {

  constructor(private httpClient: HttpClient) {
  }

  addNewFavorite(gif) {
    return this.httpClient.post(
      '/api/favorites',
      {
        url: gif.images.fixed_width.url
      }
    );
  }

}
