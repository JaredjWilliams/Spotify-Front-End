import { Component, OnInit } from '@angular/core';
import {SportifyService} from "../services/sportify.service";
import {jsonToAlbum, jsonToAlbums, jsonToTracks} from "../utils/utils";


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  search: string = "";
  selectedOption: any = "artist"
  searchResults: any = [];

  constructor(
      private service : SportifyService
  ) { }

  ngOnInit(): void {
  }

  delay(t: number) {
    return new Promise(resolve => setTimeout(resolve, t));
    }

  onSearch() {
    if(this.selectedOption === "artist") {
      console.log("Searching for artist albums");
      this.getArtistAlbums();
    } else {
        console.log("Searching for album tracks");
      this.getAlbum();
    }
  }

  getArtistAlbums() {
    this.service.getArtistAlbums(this.search)
        .then((data) => jsonToAlbums(data))
        .then((data) => this.searchResults = data)
        .then(() => console.log(this.searchResults))
        .catch((error) => console.error(error));
  }

  private getAlbum() {
    this.service.getAlbum(this.search)
        .then((data) => jsonToAlbum(data[0]))
        .then((data) =>  {
          console.log(data)
          return data;
        })
        .then((data) => this.getAlbumTracks(data.id))
        .then((data) => jsonToTracks(data))
        .then((data) => this.searchResults = data)
        .catch((error) => console.log(error));
  }

  private async getAlbumTracks(albumId: string) {
      try {
          const data = await this.service.getAlbumTracks(albumId);
          return jsonToTracks(data);
      } catch (error) {
          return console.error(error);
      }
  }
}
