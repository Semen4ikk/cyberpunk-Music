import { Routes } from '@angular/router';
import {Playlist} from './features/playlist/pages/playlist';


export const routes: Routes = [
  { path: 'playlist/:slug', component: Playlist}
];
