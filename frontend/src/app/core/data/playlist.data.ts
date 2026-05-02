
import {TRACKS} from './tracks.data';
import {PlaylistModel} from '../models/playlist.model';

export const PLAYLIST: PlaylistModel[] = [
  {
    id: "1",
    name: "Techno",
    slug: "techno",
    tracks: TRACKS
  },
  {
    id: "2",
    name: "Rap",
    slug: "rap",
    tracks: [TRACKS[1],TRACKS[3], TRACKS[5], TRACKS[7], TRACKS[9],TRACKS[2], TRACKS[4], TRACKS[6], TRACKS[8]]
  },
  {
    id: "3",
    name: "Rock",
    slug: "rock",
    tracks: [TRACKS[1],TRACKS[3], TRACKS[5], TRACKS[7], TRACKS[9],TRACKS[2], TRACKS[4], TRACKS[6], TRACKS[8]]
  },
  {
    id: "4",
    name: "Pop",
    slug: "pop",
    tracks: [TRACKS[10],TRACKS[8], TRACKS[5], TRACKS[7], TRACKS[9],TRACKS[2], TRACKS[4], TRACKS[6], TRACKS[0]]
  },
  {
    id: "5",
    name: "Classic",
    slug: "classic",
    tracks: [TRACKS[0],TRACKS[3], TRACKS[5], TRACKS[1], TRACKS[9],TRACKS[10], TRACKS[2], TRACKS[6], TRACKS[8]]
  },
]
