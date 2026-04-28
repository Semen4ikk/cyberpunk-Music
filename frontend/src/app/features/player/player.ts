import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.scss',
})
export class Player {
  protected readonly title = signal('Player');
}
