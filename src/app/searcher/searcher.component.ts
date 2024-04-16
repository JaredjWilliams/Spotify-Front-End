import { Component, OnInit } from '@angular/core';
import {SportifyService} from "../services/sportify.service";

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

  onSearch() {
    if(this.selectedOption === "artist") {
      this.getArtistAlbums();
    } else {
      this.getAlbums();
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

  private getAlbums() {
    this.service.getAlbums(this.search)
        .then((data) => {
          console.log(data);
          this.searchResults = data;
        })
        .catch((error) => {
          console.error(error);
        });
  }
}
