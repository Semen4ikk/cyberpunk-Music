import {Component, computed, input, signal} from '@angular/core';
import {Player} from '../../player/player';
import {PLAYLIST} from '../../../core/data/playlist.data';
import {TrackModel} from '../../../core/models/track.model';
import {PlaylistTracks} from '../playlist-tracks/playlist-tracks';
import {TRACKS} from '../../../core/data/tracks.data';

@Component({
  selector: 'app-playlist-page',
  imports: [
    Player,
    PlaylistTracks
  ],
  templateUrl: './playlist.html',
  styleUrl: './playlist.scss',
})
export class Playlist {
  slug = input.required<string>();
  playlist = computed(()=>PLAYLIST.find((playlist) => playlist.slug ===
    this.slug()));

  currentTrack = signal<TrackModel | null>(TRACKS[0])

  onTrackSelect(track: TrackModel) {
    this.currentTrack.set(track);
  }

  selectNextTrack() {
    const playlist = this.playlist();
    if(!playlist) return

    const currentTrack = this.currentTrack();
    if (!currentTrack) return

    const currentIndex = playlist.tracks.findIndex((track) => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.tracks.length;
    const nextTrack = playlist.tracks[nextIndex];

    this.currentTrack.set(nextTrack)
  }

  selectPreviousTrack() {
    const playlist = this.playlist();
    if(!playlist) return

    const currentTrack = this.currentTrack();
    if (!currentTrack) return

    const currentIndex = playlist.tracks.findIndex((track) => track.id === currentTrack.id);
    const previousIndex = (currentIndex - 1) % playlist.tracks.length;

    const previousTrack = playlist.tracks[previousIndex];

    this.currentTrack.set(previousTrack);

  }


  protected readonly ontimeupdate = ontimeupdate;
}
