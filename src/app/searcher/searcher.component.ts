import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SportifyService} from "../services/sportify.service";
import {jsonToAlbum, jsonToAlbums, jsonToTracks} from "../utils/utils";
import {Album} from "../models/Album";
import {Track} from "../models/Track";


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  search: string = "";
  selectedOption: any = "album"
  searchResults: any = [];
  album!: Album;
  tracks!: Track[];
  isSearched = false;

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
        .then((data) => this.album = data)
        .then((data) => this.getAlbumTracks(data.id))
        .then((data) => jsonToTracks(data))
        .then((data) => this.tracks = data)
        .then(() => this.isSearched = true)
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

    onSelectAlbum() {
        this.albumSelected.emit(this.album);
        this.tracksSelected.emit(this.tracks);
        this.searchFinished.emit(true);
    }

    @Output() albumSelected = new EventEmitter<Album>();
    @Output() tracksSelected = new EventEmitter<Track[]>();
    @Output() searchFinished = new EventEmitter<boolean>();

    resetSearch() {
        this.isSearched = false;
    }
}
