import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowseComponent } from './modules/browse/browse.component';
import { ComingsoonComponent } from './modules/comingsoon/comingsoon.component';
import { WatchlistComponent } from './modules/watchlist/watchlist.component';

const routes: Routes = [
  {path: '', component: BrowseComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'comingsoon', component: ComingsoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
