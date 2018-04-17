import {Component, Input, OnInit} from '@angular/core';
import {FavoriteGifService} from "../favorite-gif.service";

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  favoriteGifs = [];

  constructor(private favoriteGifService: FavoriteGifService) {
  }

  ngOnInit() {
    this.favoriteGifService.getFavorites()
      .subscribe((response) => {
        this.favoriteGifs = response;
      })
  }

}
