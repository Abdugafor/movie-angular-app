import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './modules/browse/browse.component';
import { ComingsoonComponent } from './modules/comingsoon/comingsoon.component';
import { WatchlistComponent } from './modules/watchlist/watchlist.component';
import { MovieInfoComponent } from './modules/browse/movie-info/movie-info.component';
import { LoginComponent } from './modules/authorization/login/login.component';
import { SignupComponent } from './modules/authorization/signup/signup.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { userProfileGuard } from './modules/user-profile/user-profile.guard';

const routes: Routes = [
  {path: '', component: BrowseComponent},
  {path: 'browse/:id', component: MovieInfoComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'comingsoon', component: ComingsoonComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: UserProfileComponent, canActivate: [userProfileGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
