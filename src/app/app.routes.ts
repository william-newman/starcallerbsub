import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { GamesComponent } from './main/games/games.component';
import { PhotographyComponent } from './main/photography/photography.component';
import { DjComponent } from './main/dj/dj.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'dj', component: DjComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: 'labs', component: GamesComponent },
    { path: '**',   redirectTo: ''}
];
