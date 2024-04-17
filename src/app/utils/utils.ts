import {plainToInstance} from "class-transformer";
import {Album} from "../models/Album";
import {Track} from "../models/Track";
import {Question} from "../models/Question";


export const jsonToAlbum = (json: any) => plainToInstance(Album, json)
export const jsonToAlbums = (json: any) => [...Array.from(json)].map((album: any) => jsonToAlbum(album))
export const jsonToTrack = (json: any) => plainToInstance(Track, json)
export const jsonToTracks = (json: any) => [...Array.from(json)].map((track: any) => jsonToTrack(track))

export const tracksToQuestions = (tracks : Track[]) => tracks.map((track) => {
return {
        question: `What is the name of the track with the preview below?`,
        preview: track.preview_url,
        options: tracks.map((track) => track.name),
        answer: track.name
    }
})

export const randomizedArray = (array: Question[]) => array.length > 0 ? array.sort(() => Math.random() - 0.5) : array
export const testing = (array  : Question[]) => {
    return array.slice()
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);
}
