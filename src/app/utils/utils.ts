import {plainToInstance} from "class-transformer";
import {Album} from "../models/Album";
import {Track} from "../models/Track";


export const jsonToAlbum = (json: any) => plainToInstance(Album, json)
export const jsonToAlbums = (json: any) => [...Array.from(json)].map((album: any) => jsonToAlbum(album))
export const jsonToTrack = (json: any) => plainToInstance(Track, json)
export const jsonToTracks = (json: any) => [...Array.from(json)].map((track: any) => jsonToTrack(track))