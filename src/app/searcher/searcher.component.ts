import { Component, OnInit } from '@angular/core';
import {SportifyService} from "../services/sportify.service";
import {jsonToAlbum} from "../utils/JsonToAlbum";

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
      this.getArtistAlbums();
    } else {
      this.getAlbum();
    }
  }

  getArtistAlbums() {
    this.service.getArtistAlbums(this.search)
        .then((data) => {
          console.log(data);
          this.searchResults = data;
        })
        .catch((error) => {
          console.error(error);
        });
  }

  private getAlbum() {
    this.service.getAlbum(this.search)
        .then((data) => jsonToAlbum(data[0]))
        .then((data) => {
          console.log("should be one album", data);
          return data
        })
        .then((data) => this.getAlbumTracks(data.id))
        .then((data) => {
          console.log(data);
          this.searchResults = data;
        })
        .catch((error) => {
          console.error(error);
        });
  }

  private getAlbumTracks(albumId: string) {
    this.service.getAlbumTracks(albumId)
        .then((data) => {
          console.log(data);
          this.searchResults = data;
        })
        .catch((error) => {
          console.error(error);
        });
  }
}
