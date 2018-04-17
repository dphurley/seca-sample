import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite-gif',
  templateUrl: './favorite-gif.component.html',
  styleUrls: ['./favorite-gif.component.css']
})
export class FavoriteGifComponent implements OnInit {

  @Input() gif;

  constructor() { }

  ngOnInit() {
  }

}
