import {instanceToPlain, plainToClass, plainToInstance} from "class-transformer";
import {Album} from "../models/Album";


export const jsonToAlbum = (json: any) => plainToInstance(Album, json)

