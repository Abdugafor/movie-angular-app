import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './modules/browse/browse.component';
import { WatchlistComponent } from './modules/watchlist/watchlist.component';
import { ComingsoonComponent } from './modules/comingsoon/comingsoon.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularComponent } from './modules/browse/popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    WatchlistComponent,
    ComingsoonComponent,
    HeaderComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
