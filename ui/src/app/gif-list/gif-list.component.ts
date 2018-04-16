import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {

  gifs = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<>('http://api.giphy.com/v1/gifs/search?api_key=rOgR2hv14OvffKYnDfKmeBNiaF2m6TQb&q=cheeseburger')
      .subscribe(response => {
        this.gifs = response.data;
      });
  }

}
