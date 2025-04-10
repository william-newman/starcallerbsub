import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { GamesComponent } from './main/games/games.component';
import { PhotographyComponent } from './main/photography/photography.component';
import { DjComponent } from './main/dj/dj.component';
import { VersionHistoryComponent } from './hidden/version-history/version-history.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'dj', component: DjComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: 'labs', component: GamesComponent },
    { path: 'version-history', component: VersionHistoryComponent, pathMatch: 'full' },
    { path: '**',   redirectTo: ''}
];
