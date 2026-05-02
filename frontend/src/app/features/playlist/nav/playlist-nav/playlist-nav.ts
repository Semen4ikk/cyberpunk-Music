import {Component} from '@angular/core';
import {PLAYLIST} from '../../../../core/data/playlist.data';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-playlist-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './playlist-nav.html',
  styleUrl: './playlist-nav.scss',
})
export class PlaylistNav {
  playlists = PLAYLIST;
}
