import { Injectable } from '@angular/core';
import fetchFromSpotify from "../../services/api";
import {TOKEN_KEY} from "../home/home.component";

@Injectable({
  providedIn: 'root'
})
export class SportifyService {


  constructor(
  ) { }

  getToken() : string {
    return JSON.parse(localStorage.getItem(TOKEN_KEY)!).value
  }

  getArtistId(name : string) {
    const token = this.getToken();
    return fetchFromSpotify({ token, endpoint: `search?q=${name}&type=artist` })
        .then((data) => {
            return data.artists.items[0].id;
        })
        .catch((error) => {
            console.error(error);
        });
  }

  getArtistAlbums(name : string) {
    const token = this.getToken()
    return  this.getArtistId(name)
        .then((id) => fetchFromSpotify({ token, endpoint: `artists/${id}/albums`}))
        .then((data) => {
            return data.items;
        })

  }

    getAlbums(search: string) {
        const token = this.getToken();
        return fetchFromSpotify({ token, endpoint: `search?q=${search}&type=album` })
            .then((data) => {
                return data.albums.items;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
