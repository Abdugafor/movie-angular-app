import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './modules/browse/browse.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { SearchComponent } from './modules/search/search.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '', 
    component: BrowseComponent
  },
  {
    path: 'browse/:id', 
    loadChildren: () => import('./modules/movie-info/movieInfo.module').then(m => m.MovieInfoModule)
  },
  {
    path: 'watchlist', 
    loadChildren: () => import('./modules/watchlist/watchlist.module').then(m => m.WatchlistModule)
  },
  {
    path: 'comingsoon', 
    loadChildren: () => import('./modules/comingsoon/comingsoon.module').then(m => m.ComingSoonModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/authorization/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'search/:id',
    component: SearchComponent
  },
  {
    path: 'profile', 
    component: UserProfileComponent, 
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**', 
    redirectTo: '/error'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
