import { Routes } from '@angular/router';
import { Playlist } from './features/playlist/pages/playlist';

export const routes: Routes = [
  { path: '', redirectTo: 'playlist/default', pathMatch: 'full' },
  { path: 'playlist/:slug', component: Playlist },
  { path: '**', redirectTo: '' }
];
