import {TrackModel} from './track.model';

export class PlaylistModel {
  id: string;
  slug: string;
  name: string;
  tracks: TrackModel[]

  constructor(id: string, slug: string, name: string, tracks: TrackModel[]) {
    this.id = id;
    this.slug = slug;
    this.name = name;
    this.tracks = tracks;
  }
}
