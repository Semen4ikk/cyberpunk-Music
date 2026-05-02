import {Component, effect, ElementRef, input, output, signal, ViewChild} from '@angular/core';
import {TrackModel} from '../../core/models/track.model';
import {TRACKS} from '../../core/data/tracks.data';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.scss',
})
export class Player {
  @ViewChild('audioElement') audioRef!: ElementRef<HTMLAudioElement>;

  handleSelectNextTrack = output<void>();
  handleSelectPreviousTrack = output<void>();

  currentTrack = input<TrackModel | null>(TRACKS[0]);
  isPlaying = signal(false)
  currentTime = signal(0)

  constructor() {
    effect(()=>{
      const track = this.currentTrack();
      if(track && this.audioRef){
        this.audioRef.nativeElement.load()
        if(this.isPlaying()){
          this.audioRef.nativeElement.play();
        }
      }
    })
  }



  get formattedTime() : string {
    const time = this.currentTime()
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${Math.floor((time % 1)* 100)
      .toString().padStart(2, '0')}`
  }

  togglePlay(){
    if (this.isPlaying()){
      this.audioRef.nativeElement.pause();
    }else{
      this.audioRef.nativeElement.play();
    }
    this.isPlaying.set(!this.isPlaying())
  }

  previous(){
    this.handleSelectPreviousTrack.emit()
  }
  next(){
    this.handleSelectNextTrack.emit()
  }
  rewind(){
    this.audioRef.nativeElement.currentTime -=10
  }
  forward(){
    this.audioRef.nativeElement.currentTime +=10
  }

  protected readonly ontimeupdate = ontimeupdate;
}
