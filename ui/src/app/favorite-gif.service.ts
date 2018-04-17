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

  getFavorites() {
    return this.httpClient.get<>('/api/favorites')
  }

  deleteGif(gifId) {
    return this.httpClient.delete(`/api/favorites/${gifId}`)
  }

}
