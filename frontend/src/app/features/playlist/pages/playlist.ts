import {Component, inject, signal} from '@angular/core';
import {Player} from '../../player/player';
import {ActivatedRoute} from '@angular/router';
import {PLAYLIST} from '../../../core/data/playlist.data';
import {PlaylistModel} from '../../../core/models/playlist.model';

@Component({
  selector: 'app-playlist-page',
  imports: [
    Player
  ],
  templateUrl: './playlist.html',
  styleUrl: './playlist.scss',
})
export class Playlist {
  playlist = signal<PlaylistModel | null>(null)

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe(params => {
      const foundPlaylist = PLAYLIST.find((playlist) => playlist.slug
        === params['slug'])
      this.playlist.set(foundPlaylist || null);

      console.log('found playlist', foundPlaylist?.name);
      console.log("params route", params);
    })
  }
}
