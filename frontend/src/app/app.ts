import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PlaylistNav} from './features/playlist/nav/playlist-nav/playlist-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlaylistNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
