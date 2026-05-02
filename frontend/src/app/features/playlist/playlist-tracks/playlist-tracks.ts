import {Component, computed, input, output, signal} from '@angular/core';
import {PlaylistModel} from '../../../core/models/playlist.model';
import {TrackModel} from '../../../core/models/track.model';

type ViewMode = 'tracks' | 'description'

@Component({
  selector: 'app-playlist-tracks',
  imports: [],
  templateUrl: './playlist-tracks.html',
  styleUrl: './playlist-tracks.scss',
})
export class PlaylistTracks {
  playlist = input.required<PlaylistModel | undefined>();
  activeTrack = input.required<TrackModel | null>();
  handleTrackSelect = output<TrackModel>()
  viewMode = signal<ViewMode>('tracks')

  gridTracks = computed(()=>{
    const tracks = this.playlist()?.tracks || [];
    const grid: (TrackModel | null)[] = new Array(9).fill(null)
    tracks.forEach((track, index)=>{
      if(index <9){
        grid[index] = track;
      }
    })
    return grid;
  })

  setViewMode(mode: ViewMode){
    this.viewMode.set(mode);
  }

  selectTrack(track:TrackModel | null){
    if(track){
      this.handleTrackSelect.emit(track);
    }
  }

  isActiveTrack(track:TrackModel | null): boolean{
    return track !== null && this.activeTrack() === track;
  }

  protected readonly TrackModel = TrackModel;
}
