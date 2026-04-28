import {ArtistModel} from './artist.model';

export class TrackModel {
  id: string;
  name: string;
  duration: number;
  path: string;
  cover: string;
  artist: ArtistModel[];

  constructor(id: string, name: string, duration: number, path: string, cover: string, artist: ArtistModel[]) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.path = path;
    this.cover = cover;
    this.artist = artist;
  }
}
