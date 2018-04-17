import {Component, Input, OnInit} from '@angular/core';
import {FavoriteGifService} from "../favorite-gif.service";

@Component({
  selector: 'app-favorite-gif',
  templateUrl: './favorite-gif.component.html',
  styleUrls: ['./favorite-gif.component.css']
})
export class FavoriteGifComponent implements OnInit {

  @Input() gif;

  constructor(private favoriteGifService: FavoriteGifService) { }

  ngOnInit() {
  }

  deleteGif(gifId){
    this.favoriteGifService.deleteGif(gifId)
      .subscribe((response) => {
        console.log(response)
      })
  }

}
